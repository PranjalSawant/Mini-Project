import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios or fetch for API requests

export const AgentInfo = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:9090/api/agents'); 
        setAgents(response.data);
      } catch (err) {
        console.error('Error fetching agent data:', err);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className='container-fluid'>
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
              <td>{agent.agentFirstName}</td>
              <td>{agent.agentLastName}</td>
              <td>{agent.agentEmail}</td>
              <td>{agent.phone}</td>
              <td>{agent.agentType}</td>
              <td>{agent.agentAddress}</td>
              <td>{agent.agentCity}</td>
              <td>{agent.agentState}</td>
              <td>{agent.agentCountry}</td>
              <td>{agent.agentZip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentInfo;
