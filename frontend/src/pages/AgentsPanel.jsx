import React, { useState } from "react";
import { Titles } from "../components/Titles";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export const AgentsPanel = () => {
  const [selectedPincode, setSelectedPincode] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [error, setError] = useState(""); // Error state for invalid pincode

  const handlePincodeChange = (e) => {
    const pincode = e.target.value;
    // Ensure only digits are allowed and pincode is a 6-digit number
    if (/^\d{0,6}$/.test(pincode)) {
      setSelectedPincode(pincode);
      setError(""); // Clear error if pincode is valid
    } else {
      setError("Pincode must be a 6-digit number");
    }
  };

  const handlePincodeSubmit = async (e) => {
    e.preventDefault();

    if (selectedPincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:9090/api/user/pickups/${selectedPincode}`
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

  return (
    <div className="container">
      <Titles heading="Enter Pincode to Display Cards" textColor="text-olive" />
      <form onSubmit={handlePincodeSubmit}>
        <input
          type="text"
          className="form-control bg-olive pincode-input p-3 fw-semibold"
          placeholder="Enter 6-digit pincode"
          value={selectedPincode}
          onChange={handlePincodeChange}
        />
        {error && <p className="text-danger">{error}</p>} {/* Error message */}
        <Button btnText="Search" bgColor="btn-success mt-3" />
      </form>

      <div className="row mt-3">
        {cardsData.length === 0 && !error && (
          <p className="text-center">No pickups found for this pincode.</p>
        )}
        {cardsData.map((card) => (
          (card.collectionZip === selectedPincode) && (
            <div className="col-md-4" key={card.collectionId}>
              <div className="card mb-3 border-0 rounded-5">
                <div className="card-body bg-grey rounded-5 p-4">
                  <h5 className="card-title fw-bold py-3">
                    {card.collectionName} - {card.userId}{" "}
                    {card.user.firstname}
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
        ))}
      </div>
      <div className="py-5"></div>
    </div>
  );
};
