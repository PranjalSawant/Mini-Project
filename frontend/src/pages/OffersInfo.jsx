import React, { useState } from "react";
import axios from "axios";

export const OffersInfo = () => {
  const [offer, setOffer] = useState({
    offerId: 0, // Automatically set to 0
    offerName: "",
    offerDescription: "",
    discount: 0,
    isActive: "Y",
  });
  const [alertMessage, setAlertMessage] = useState(null); 
  const [alertType, setAlertType] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({
      ...offer,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9090/api/offers", offer);
      
      // Show success message
      setAlertMessage("Offer submitted successfully!");
      setAlertType("success");
      
      console.log("Offer submitted:", response.data);

      // Clear the form after submission
      setOffer({
        offerId: 0,
        offerName: "",
        offerDescription: "",
        discount: 0,
        isActive: "Y",
      });

    } catch (error) {
      setAlertMessage("Failed to submit offer.");
      setAlertType("danger");
      console.error("Error submitting offer:", error);
    }
  }
  return (
    <div className="container">
    <h2 className="mt-4 mb-4">Create a New Offer</h2>

    {/* Alert Message */}
    {alertMessage && (
      <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
        {alertMessage}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )}

    <form onSubmit={handleSubmit}>
      {/* Removed Offer ID input field */}
      <div className="mb-3">
        <label htmlFor="offerName" className="form-label">Offer Name</label>
        <input
          type="text"
          className="form-control"
          id="offerName"
          name="offerName"
          value={offer.offerName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="offerDescription" className="form-label">Offer Description</label>
        <textarea
          className="form-control"
          id="offerDescription"
          name="offerDescription"
          rows="3"
          value={offer.offerDescription}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="discount" className="form-label">Discount (%)</label>
        <input
          type="number"
          className="form-control"
          id="discount"
          name="discount"
          value={offer.discount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="isActive" className="form-label">Is Active</label>
         <select
          className="form-select"
          id="isActive"
          name="isActive"
          value={offer.isActive}
          onChange={handleChange}
          required
        >
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        </div>
      <button type="submit" className="btn btn-success">Add Offer</button>
    </form>
  </div>
);
};
