import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, collectionInfo } from "../config";

export const CollectionInfo = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`${url + collectionInfo}`);
        console.log("API Response:", response.data); // Log the response data
        setCollections(response.data);
      } catch (err) {
        console.error("Error fetching collection data:", err);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="mt-4 mb-4">Collection Information</h2>
      <table className="table table-striped">
        <thead className="thead-dark bg-olive text-white">
          <tr>
            <th>#</th>
            <th>Collection Items</th>
            <th>Pickup Date</th>
            <th>Agent Name</th>
            <th>Contact Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {collections.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No collections available</td>
            </tr>
          ) : (
            collections.map((collection, index) => (
              <tr key={collection.orderId}>
                <td>{index + 1}</td>
                <td>
                  {collection.items && Array.isArray(collection.items) 
                    ? collection.items.map(item => (
                        <div key={item.itemType}>
                          {item.itemType} (Quantity: {item.quantity})
                        </div>
                      )) 
                    : "No items available"}
                </td>
                <td>{new Date(collection.modifiedDate).toLocaleDateString()}</td>
                <td>{collection.agent.agentFirstName} {" "} {collection.agent.agentLastName}</td>
                <td>{collection.agent.phone}</td>
                <td>{collection.orderStatus}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionInfo;
