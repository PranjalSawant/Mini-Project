import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url, userInfo } from '../config';

export const UserInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${url + userInfo}`);
        setUsers(response.data); 
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='container-fluid'>
      <h2 className='mt-4 mb-4'>User Information</h2>
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
          {users.map((user, index) => (
            <tr key={user.userId}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.is_verified === "Y" ? 'Yes' : 'No'}</td>
              <td>{user.street}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.country}</td>
              <td>{user.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
