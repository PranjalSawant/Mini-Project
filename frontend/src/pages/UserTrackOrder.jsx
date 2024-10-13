// src/components/UserTrackOrder.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Titles } from "../components/Titles";
import { getCookie } from "../utils/cookie";

export const UserTrackOrder = () => {
  const [orders, setOrders] = useState([]); // fetched orders
  const [loading, setLoading] = useState(true); // handle loading
  const [error, setError] = useState(null); //  handle errors

  useEffect(() => {
    const fetchPendingCollections = async () => {
      try {
        const response = await axios.post(
          "http://localhost:9090/api/user/pending-collections",
          {
            userId: getCookie("id"),
          }
        );

        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching pending collections:", err);
        setError("Failed to fetch pending collections.");
        setLoading(false);
      }
    };

    fetchPendingCollections();
  }, []);

  // background color
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#d4edda"; // Greencompleted orders
      case "Pending":
        return "#fff3cd"; // Yellow  pending orders
      case "Processing":
        return "#cce5ff"; // Blue processing orders
      default:
        return "#ffffff";
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="container">
        <Titles
          textColor="text-olive"
          heading="Follow Your Waste's Journey to Cash!"
        />
        <p>Loading pending collections...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container">
        <Titles
          textColor="text-olive"
          heading="Follow Your Waste's Journey to Cash!"
        />
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Titles
        textColor="text-olive"
        heading="Follow Your Waste's Journey to Cash!"
      />
      {orders.length === 0 ? (
        <p>No pending collections found.</p>
      ) : (
        <table className="table table-striped">
          <thead className="thead-dark bg-olive text-white">
            <tr>
              <th>Collection ID</th>
              <th>Order ID</th>
              <th>Collection Date</th>
              <th>Customer Name</th>
              <th>Collection Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((collection) => (
              <tr key={collection.collectionId}>
                <td>{collection.collectionId}</td>
                <td>{collection.orderId}</td>
                <td>
                  {new Date(collection.collectionStartTime).toLocaleString()}
                </td>
                <td>
                  {collection.user.firstname} {collection.user.lastname}
                </td>
                <td>{collection.collectionType}</td>
                <td>
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: getStatusColor(
                        collection.collectionStatus
                      ),
                      color: "black",
                    }}
                  >
                    {collection.collectionStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="py-5"></div>
    </div>
  );
};
