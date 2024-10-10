import React from 'react'
import { Titles } from '../components/Titles';

export const AgentsTrack = () => {
    const collectionData = [
        {
          collectionId: 1,
          userId: 100,
          collectionType: 'Plastic',
          collectionName: 'Plastic Bottles',
          collectionDescription: 'Collection of plastic bottles',
          isAssigned: 'true',
          collectionStartTime: '2024-10-10T17:13:05.504Z',
          collectionEndTime: '2024-10-10T19:13:05.504Z',
          collectionStatus: 'Pending',
          collectionState: 'Maharashtra',
          collectionCity: 'Mumbai',
          collectionZip: '400001',
          collectionCountry: 'India',
        },
        {
          collectionId: 2,
          userId: 101,
          collectionType: 'Paper',
          collectionName: 'Old Newspapers',
          collectionDescription: 'Collection of old newspapers',
          isAssigned: 'false',
          collectionStartTime: '2024-10-11T12:00:00.000Z',
          collectionEndTime: '2024-10-11T14:00:00.000Z',
          collectionStatus: 'Completed',
          collectionState: 'Karnataka',
          collectionCity: 'Bangalore',
          collectionZip: '560001',
          collectionCountry: 'India',
        }
      ];
    
      return (
        <div className="container-fluid mt-4">
          <Titles heading="Collection Data" textColor="text-olive"/>
          <table className="table table-bordered rounded" style={{ borderColor: '#000' }}>
        <thead style={{ backgroundColor: '#304D30', color: '#fff' }}>

              <tr>
                <th>Collection ID</th>
                <th>User ID</th>
                <th>Collection Type</th>
                <th>Collection Name</th>
                <th>Collection Description</th>
                <th>Assigned</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>State</th>
                <th>City</th>
                <th>ZIP</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {collectionData.map((item, index) => (
                <tr key={index} style={{ backgroundColor: '#EEF0E5' }}>
                  <td>{item.collectionId}</td>
                  <td>{item.userId}</td>
                  <td>{item.collectionType}</td>
                  <td>{item.collectionName}</td>
                  <td>{item.collectionDescription}</td>
                  <td>{item.isAssigned}</td>
                  <td>{new Date(item.collectionStartTime).toLocaleString()}</td>
                  <td>{new Date(item.collectionEndTime).toLocaleString()}</td>
                  <td>{item.collectionStatus}</td>
                  <td>{item.collectionState}</td>
                  <td>{item.collectionCity}</td>
                  <td>{item.collectionZip}</td>
                  <td>{item.collectionCountry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
