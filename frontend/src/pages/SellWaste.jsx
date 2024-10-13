import React, { useEffect, useState } from "react";
import { Titles } from "../components/Titles";
import plastic from "../assets/plastic.png";
import paper from "../assets/paper.png";
import ewaste from "../assets/e-waste.png";
import clothes from "../assets/clothes.png";
import { Button } from "../components/Button";
import { ImpactProgress } from "../components/ImpactProgress";
import axios from "axios";
import {
  getObjectFromLocalStorage,
  storeObjectInLocalStorage,
  removeObjectFromLocalStorage,
} from "../utils/cookie"; // Ensure correct path

export const SellWaste = () => {
  const [showModal, setShowModal] = useState(false);

  // Helper function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Initialize pickupData state with data from localStorage or default structure
  const [pickupData, setPickupData] = useState(() => {
    const savedData = getObjectFromLocalStorage("pickupData");
    if (savedData) {
      return savedData;
    }
    return {
      userId: 1,
      userAddressId: 1, // This should ideally be dynamic based on user addresses
      pickupAddress: {
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      pickupDate: getTodayDate(), // Initialize with today's date
      pickupStartTime: "10:00", // Use HH:mm format
      pickupEndTime: "11:00", // Use HH:mm format
      items: [],
      specialInstructions: "Please call me 30 minutes before arrival.",
      contactNumber: "",
    };
  });

  // Effect to fetch user data and populate pickupData on component mount
  useEffect(() => {
    const userData = getObjectFromLocalStorage("userdata");
    if (userData && userData.user) {
      setPickupData((prevData) => ({
        ...prevData,
        userId: userData.user.userId || prevData.userId,
        contactNumber: userData.user.phone || prevData.contactNumber,
        // Populate pickupAddress if addresses are available
        pickupAddress:
          userData.user.addresses && userData.user.addresses.length > 0
            ? {
                address:
                  userData.user.addresses[0].street ||
                  prevData.pickupAddress.address,
                city:
                  userData.user.addresses[0].city ||
                  prevData.pickupAddress.city,
                state:
                  userData.user.addresses[0].state ||
                  prevData.pickupAddress.state,
                zip:
                  userData.user.addresses[0].zipCode ||
                  prevData.pickupAddress.zip,
                country:
                  userData.user.addresses[0].country ||
                  prevData.pickupAddress.country,
              }
            : prevData.pickupAddress,
        // Optionally, set userAddressId dynamically if addresses are present
        userAddressId:
          userData.user.addresses && userData.user.addresses.length > 0
            ? userData.user.addresses[0].addressId // Ensure `addressId` exists
            : prevData.userAddressId,
      }));
    }
  }, []);

  // Effect to persist pickupData to localStorage whenever it changes
  useEffect(() => {
    storeObjectInLocalStorage("pickupData", pickupData);
  }, [pickupData]);

  const handleItemClick = (itemType) => {
    setPickupData((prevData) => ({
      ...prevData,
      items: [...prevData.items, { itemType, quantity: 1 }], // default quantity of 1
    }));
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload to match PickupRequestDTO
    const payload = {
      userId: pickupData.userId,
      userAddressId: pickupData.userAddressId, // Dynamic if possible
      collectionType: "Pickup",
      collectionName: "Waste Pickup",
      collectionDescription: pickupData.specialInstructions, // special instructions as description
      pickupAddress: {
        address: pickupData.pickupAddress.address,
        city: pickupData.pickupAddress.city,
        state: pickupData.pickupAddress.state,
        zip: pickupData.pickupAddress.zip,
        country: pickupData.pickupAddress.country,
      },
      pickupDate: pickupData.pickupDate, // YYYY-MM-DD format
      pickupStartTime: pickupData.pickupStartTime, // HH:mm format
      pickupEndTime: pickupData.pickupEndTime, // HH:mm format
      items: pickupData.items, // Include items if needed in DTO
      contactNumber: pickupData.contactNumber, // Ensure backend DTO includes this if necessary
    };

    try {
      const response = await axios.post(
        "http://localhost:9090/api/user/pickup",
        payload
      );
      console.log("Pickup scheduled successfully", response.data);
      setShowModal(false); // Close modal on success
      removeObjectFromLocalStorage("pickupData"); // Clear stored data if desired
    } catch (error) {
      console.error("Error scheduling pickup", error);
      // Optionally, add user-facing error handling here
    }
  };

  return (
    <div className="">
      <div className="py-5 bg-olive">
        <div className="container">
          <Titles
            heading="Your Recycling Impact in Action"
            textColor="text-white"
          />
          <p className="text-center text-white fw-semibold">
            Every small step counts! You’re making a tangible difference by
            turning waste into resources. Track your progress and see how much
            you've contributed to a cleaner planet. Let’s keep the momentum
            going – the more you recycle, the bigger your impact on the
            environment!
          </p>
        </div>
        <div className="p-5 d-flex">
          <div className="m-auto">
            <ImpactProgress />
          </div>
        </div>
      </div>
      <div className="container">
        <Titles
          heading="Pick a Category for Your Recyclable Items"
          textColor="text-olive"
        />
        <div className="row">
          <div className="col-md-3 my-2">
            <div
              onClick={() => handleItemClick("Plastic Waste")}
              className="text-decoration-none "
            >
              <div className="rounded-3 border-olive ">
                <div className="d-flex">
                  <img
                    src={plastic}
                    alt="Plastic Waste"
                    className="img-fluid rounded-3 m-auto"
                  />
                </div>
                <p className="text-center fw-semibold text-olive fs-5">
                  Plastic Waste
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div
              onClick={() => handleItemClick("Paper Waste")}
              className="text-decoration-none"
            >
              <div className="rounded-3 border-olive">
                <div className="d-flex">
                  <img
                    src={paper}
                    alt="Paper Waste"
                    className="img-fluid rounded-3 m-auto"
                  />
                </div>
                <p className="text-center fw-semibold text-olive fs-5">
                  Paper Waste
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div
              onClick={() => handleItemClick("E-Waste")}
              className="text-decoration-none"
            >
              <div className="rounded-3 border-olive">
                <div className="d-flex">
                  <img
                    src={ewaste}
                    alt="E-Waste"
                    className="img-fluid rounded-3 m-auto"
                  />
                </div>
                <p className="text-center fw-semibold text-olive fs-5">
                  E-Waste
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div
              onClick={() => handleItemClick("Clothes")}
              className="text-decoration-none"
            >
              <div className="rounded-3 border-olive">
                <div className="d-flex">
                  <img
                    src={clothes}
                    alt="Clothes"
                    className="img-fluid rounded-3 m-auto"
                  />
                </div>
                <p className="text-center fw-semibold text-olive fs-5">
                  Clothes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>

        {/* Modal for Pickup Form */}
        {showModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ display: "block" }}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header bg-olive text-white">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Schedule Pickup
                  </h5>
                  <button
                    type="button"
                    className="btn-close custom-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    {/* Pickup Address Fields */}
                    <h6>Pickup Address</h6>
                    <div className="row p-3">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            required
                            value={pickupData.pickupAddress.address}
                            onChange={(e) =>
                              setPickupData({
                                ...pickupData,
                                pickupAddress: {
                                  ...pickupData.pickupAddress,
                                  address: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            required
                            value={pickupData.pickupAddress.city}
                            onChange={(e) =>
                              setPickupData({
                                ...pickupData,
                                pickupAddress: {
                                  ...pickupData.pickupAddress,
                                  city: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            required
                            value={pickupData.pickupAddress.state}
                            onChange={(e) =>
                              setPickupData({
                                ...pickupData,
                                pickupAddress: {
                                  ...pickupData.pickupAddress,
                                  state: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label htmlFor="zip" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            required
                            value={pickupData.pickupAddress.zip}
                            onChange={(e) =>
                              setPickupData({
                                ...pickupData,
                                pickupAddress: {
                                  ...pickupData.pickupAddress,
                                  zip: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            required
                            value={pickupData.pickupAddress.country}
                            onChange={(e) =>
                              setPickupData({
                                ...pickupData,
                                pickupAddress: {
                                  ...pickupData.pickupAddress,
                                  country: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pickup Date and Time */}
                    <div className="mb-3">
                      <label
                        htmlFor="pickupDate"
                        className="form-label fw-semibold"
                      >
                        Pickup Date
                      </label>
                      <input
                        type="date" // Corrected input type
                        className="form-control"
                        id="pickupDate"
                        required
                        value={pickupData.pickupDate}
                        onChange={(e) =>
                          setPickupData({
                            ...pickupData,
                            pickupDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pickupStartTime" className="form-label">
                        Pickup Start Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="pickupStartTime"
                        required
                        value={pickupData.pickupStartTime}
                        onChange={(e) =>
                          setPickupData({
                            ...pickupData,
                            pickupStartTime: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pickupEndTime" className="form-label">
                        Pickup End Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="pickupEndTime"
                        required
                        value={pickupData.pickupEndTime}
                        onChange={(e) =>
                          setPickupData({
                            ...pickupData,
                            pickupEndTime: e.target.value,
                          })
                        }
                      />
                    </div>
                    {/* Contact Number and Special Instructions */}
                    <div className="mb-3">
                      <label htmlFor="contactNumber" className="form-label">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="contactNumber"
                        required
                        value={pickupData.contactNumber}
                        onChange={(e) =>
                          setPickupData({
                            ...pickupData,
                            contactNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="specialInstructions"
                        className="form-label"
                      >
                        Special Instructions
                      </label>
                      <textarea
                        className="form-control"
                        id="specialInstructions"
                        rows="3"
                        value={pickupData.specialInstructions}
                        onChange={(e) =>
                          setPickupData({
                            ...pickupData,
                            specialInstructions: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button
                      btnText="Schedule Pickup"
                      type="submit"
                      bgColor="btn-success"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
