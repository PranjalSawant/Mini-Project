import React, { useState } from "react";
import { Titles } from "../components/Titles";
import { Button } from "../components/Button";
// import { Link } from "react-router-dom";
import axios from "axios";
import { agentPanel, pickup_confirm, url } from "../config";
import { getCookie } from "../utils/cookie";

export const AgentsPanel = () => {
  const [selectedPincode, setSelectedPincode] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [error, setError] = useState(""); // Error state for invalid pincode
  const [alertMessage, setAlertMessage] = useState(null); 
  const [alertType, setAlertType] = useState(""); 

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

  const handleConfirmation = async (e) => {

    // details of that particular card i.e collection
    const collectionId = e.target.dataset.collectionId;
    const userId = e.target.dataset.userId;

    console.log("Collection ID:", collectionId);
    console.log("User ID:", userId);
    try {
      const { data } = await axios.post(
        `${url + pickup_confirm }`, {
          collectionId : collectionId,
          agentId : getCookie("id"),
          userId : userId
        }
      );
      setAlertMessage("Pickup successful!");
      setAlertType("success");
      console.log("Data received", data);
    } catch (error) {
      console.error(
        "Data fetch failed",
        error.response?.data?.message || error.message
      );
      setAlertMessage(
        `Data fetch failed ${error.response?.data?.message || error.message}`
      );
      setAlertType("danger");
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
        // `http://localhost:9090/api/user/pickups/${selectedPincode}`
        `${url + agentPanel + selectedPincode}`
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();  // You can customize the format using toLocaleDateString() or toLocaleTimeString()
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
      {alertMessage && (
              <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                {alertMessage}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
      <div className="row mt-3">
        {cardsData.length === 0 && !error && (
          <p className="text-center">No pickups found for this pincode.</p>
        )}
        {cardsData.map(
          (card) =>
            card.collectionZip === selectedPincode && (
              <div className="col-md-4" key={card.collectionId}>
                <div className="card h-100 mb-3 border-0 rounded-5">
                  <div className="card-body bg-grey rounded-5 p-4">
                    <h5 className="card-title fw-bold py-3">
                      {card.user.firstname} {" "} {card.user.lastname}
                    </h5>
                    <p className="card-text"><strong>Message:</strong> {card.collectionDescription}</p>
                    <p className="card-text">
                      <strong>Address:</strong> {card.user.street} {" "} { card.user.city} {" "} {card.user.state}
                    </p>
                    <p className="card-text">
                      <strong>Date & Time:</strong> {formatDate(card.collectionStartTime)}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong> {card.collectionStatus}
                    </p>
                    {/* <Link> */}
                    <button
                      className="btn btn-success rounded-5 py-2"
                      data-collection-id={card.collectionId}
                      data-user-id={card.userId}
                      onClick={handleConfirmation}
                    >
                      Confirm Pickup
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className="py-5"></div>
    </div>
  );
};
