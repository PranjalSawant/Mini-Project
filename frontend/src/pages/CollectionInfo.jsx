import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, collectionInfo } from "../config";

export const CollectionInfo = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`${url + collectionInfo}`);
        setCollections(response.data);
        console.log(response.data);
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
            <th>Collection Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection, index) => (
            <tr key={collection.orderId}>
              <td>{index + 1}</td>
              <td>{collection.collectionName}</td>
              <td>{collection.collectionDescription}</td>
              <td>
                {new Date(collection.collectionDate).toLocaleDateString()}
              </td>
              <td>{collection.collectionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionInfo;
