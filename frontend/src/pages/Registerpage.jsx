import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [isAgent, setIsAgent] = useState(false); // Toggle between User and Agent registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [agentType, setAgentType] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the registration data for User or Agent based on isAgent state
    const registrationData = isAgent
      ? {
          agentId: 0,
          agentFirstName: name.split(' ')[0], // Agent First Name
          agentLastName: name.split(' ')[1] || '', // Agent Last Name
          agentEmail: email,
          agentPassword: password,
          phone: parseInt(phone),
          agentType: agentType, // New field for agent
          agentAddress: street,
          agentCity: city,
          agentState: state,
          agentZip: zipCode,
          agentCountry: country,
        }
      : {
          userId: 1,
          firstname: name.split(' ')[0], // User First Name
          lastname: name.split(' ')[1] || '', // User Last Name
          email: email,
          password: password,
          phone: parseInt(phone),
          isVerified: 'false', // Default verification status
          street: street,
          city: city,
          state: state,
          zipCode: zipCode,
          country: country,
         // Empty addresses object for now
        };

    const apiEndpoint = isAgent
      ? 'http://localhost:9090/api/agent/signup' // Agent signup endpoint
      : 'http://localhost:9090/api/user/signup'; // User signup endpoint

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`${isAgent ? 'Agent' : 'User'} registration successful`, result);
      } else {
        console.error(`${isAgent ? 'Agent' : 'User'} registration failed`, result.message);
      }
    } catch (error) {
      console.error(`Error during ${isAgent ? 'agent' : 'user'} registration:`, error);
    }
  };

  return (
    <div className="container">
      <h2>{isAgent ? 'Agent' : 'User'} Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        {isAgent && (
          <div>
            <label>Agent Type:</label>
            <input
              type="text"
              value={agentType}
              onChange={(e) => setAgentType(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Register</button>
      </form>
      
      <div className="mt-3 text-center">
        <p>
          Are you an {isAgent ? 'User' : 'Agent'}?{' '}
          <Link className="switch-link" onClick={() => setIsAgent(!isAgent)}>
            Switch to {isAgent ? 'User' : 'Agent'} Register
          </Link>
        </p>
        <p>
          Already have an account? <Link className="switch-link" to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
