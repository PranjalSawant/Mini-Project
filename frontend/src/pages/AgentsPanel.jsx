import React, { useState } from "react";
import { Titles } from "../components/Titles";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
export const AgentsPanel = () => {
  const [selectedPincode, setSelectedPincode] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const handlePincodeChange = async (e) => {
    const pincode = e.target.value; // Capture the pincode directly from the event
    setSelectedPincode(pincode);

    try {
      const { data } = await axios.get(
        `http://localhost:9090/api/agents/pickups/${pincode}`
      );

      console.log("Data received", data);
      setCardsData(data);
    } catch (error) {
      console.error(
        "Data fetch failed",
        error.response?.data?.message || error.message
      );
    }
  };

  //   const cardsData = [
  //     {
  //       pincode: "110001",
  //       title: "Delhi",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.",
  //     },
  //     {
  //       pincode: "400001",
  //       title: "Mumbai",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.",
  //     },
  //     {
  //       pincode: "560001",
  //       title: "Bangalore",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet impedit odit fuga numquam minus a beatae adipisci corrupti tempora quis unde optio natus libero earum, repellat dolores cupiditate nesciunt.",
  //     },
  //   ];

  return (
    <div className="container">
      <Titles
        heading="Select Pincode to Display Cards"
        textColor="text-olive"
      />
      <select
        className="form-control bg-olive pincode-dropdwown p-3 fw-semibold"
        onChange={handlePincodeChange}
      >
        <option value="">Select Pincode</option>
        <option value="400604">400604</option>
        <option value="400001">400001</option>
        <option value="560001">560001</option>
      </select>
      {/* <div className="row mt-3">
        {cardsData.map(
          (card) =>
            (card.pincode === card.collectionZip || selectedPincode === "") && (
              <div className="col-md-4" key={card.pincode}>
                <div className="card mb-3 border-0 rounded-5">
                  <div className="card-body bg-grey rounded-5 p-4">
                    <h5 className="card-title fw-bold py-3">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <Link>
                      <Button btnText="Confirm Pickup" bgColor="btn-success" />
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div> */}
      <div className="row mt-3">
        {cardsData.map(
          (card) =>
            (card.collectionZip === selectedPincode ||
              selectedPincode === "") && (
              <div className="col-md-4" key={card.collectionId}>
                <div className="card mb-3 border-0 rounded-5">
                  <div className="card-body bg-grey rounded-5 p-4">
                    <h5 className="card-title fw-bold py-3">
                      {card.collectionName} - {card.userId}
                    </h5>
                    <p className="card-text">{card.collectionDescription}</p>
                    <p className="card-text">
                      <strong>City:</strong> {card.collectionCity},{" "}
                      {card.collectionState}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong> {card.collectionStatus}
                    </p>
                    <Link>
                      <Button btnText="Confirm Pickup" bgColor="btn-success" />
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
