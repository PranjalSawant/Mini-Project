import React, { useEffect, useState } from "react";
import { Titles } from "../components/Titles";
import { getCookie } from "../utils/cookie";
import { url, viewoffer } from "../config";

export const Offers = () => {
  const [offers, setOffers] = useState([]); // Initialize offers as an empty array

  useEffect(() => {
    const userId = getCookie("id");

    const fetchOffer = async () => {
      try {
        const response = await fetch(`${url + viewoffer + userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const offerData = await response.json();

        // Access the pendingOffers array from the response
        if (offerData.pendingOffers && Array.isArray(offerData.pendingOffers)) {
          setOffers(offerData.pendingOffers);
        } else {
          console.error("No pending offers found:", offerData);
          setOffers([]); // Default to empty array if pendingOffers is not found
        }
      } catch (error) {
        console.error("Error fetching offer:", error);
        setOffers([]); // Default to empty array in case of error
      }
    };

    fetchOffer();
  }, []);

  return (
    <div className="container">
      <Titles
        heading="Turn Your Trash into Treasure – Exclusive Recycling Offers!"
        textColor="text-olive"
      />
      <div className="row">
        {offers.length > 0 ? (
          offers.map((offerObj, index) => {
            const { offer } = offerObj; // Access the nested offer object
            return (
              <div className="col-md-12 mb-4" key={index}>
                <div className="card h-100 mb-3 border-0 rounded-5">
                  <div className="card-body bg-grey rounded-5 p-4">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{offer.offerName}</h5>
                      <p className="text-olive fw-semibold">
                        ⏰ Valid until {offerObj.receivedDate}
                      </p>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Bonus: {offer.discount}%
                    </h6>
                    <p className="card-text">{offer.offerDescription}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No offers available at the moment.</p>
        )}
      </div>
      <div className="py-5"></div>
    </div>
  );
};
