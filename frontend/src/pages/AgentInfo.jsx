import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios or fetch for API requests

export const AgentInfo = () => {
  const [agents, setAgents] = useState([]); // State to store fetched agent data

  // Sample agent data to simulate the fetch
  const sampleAgents = [
    {
      agentId: 1,
      firstname: "Vinod",
      lastname: "Agent",
      email: "vinod@gmail.com",
      is_verified: "Verified",
      phone: "123121213",
      city: "Vasai",
      state: "Maharashtra",
      country: "India",
      zipcode: "401202",
      street: "Vasai West"
    }
  ];

  // Simulate fetching data from the backend
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        // Uncomment the following line to fetch real data
        // const response = await axios.get('http://localhost:9090/api/agents'); // Replace with your API endpoint
        
        // For testing, we use the sample data
        const response = { data: sampleAgents }; // Simulated response
        setAgents(response.data);
      } catch (err) {
        console.error('Error fetching agent data:', err);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className='container'>
      <h2 className='mt-4 mb-4'>Agent Information</h2>
      <table className='table table-striped'>
        <thead className='thead-dark bg-olive text-white'>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Verified</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={agent.agentId}>
              <td>{index + 1}</td>
              <td>{agent.firstname}</td>
              <td>{agent.lastname}</td>
              <td>{agent.email}</td>
              <td>{agent.phone}</td>
              <td>{agent.is_verified}</td>
              <td>{agent.street}</td>
              <td>{agent.city}</td>
              <td>{agent.state}</td>
              <td>{agent.country}</td>
              <td>{agent.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentInfo;
