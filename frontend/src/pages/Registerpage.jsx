import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [isAgent, setIsAgent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the registration data in JSON format
    const registrationData = {
      name: name,
      email: email,
      password: password,
      userType: isAgent ? 'Agent' : 'User' // Send either 'Agent' or 'User' based on state
    };

    try {
      // Perform a POST request to your backend registration API (replace with actual endpoint)
      const response = await fetch('https://your-backend-api.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      // Handle the response (e.g., redirect, show success or error messages)
      if (response.ok) {
        // Successful registration - handle redirection or success message
        console.log('Registration successful', result);
      } else {
        // Registration failed - show error message
        console.error('Registration failed', result.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container">
      <div className="py-lg-5"></div>
      <div className="py-lg-5 py-3"></div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="custom-form p-lg-5">
            <h2 className="form-header text-center">{isAgent ? 'Agent' : 'User'} Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success my-3 w-100">Register</button>
            </form>

            <div className="mt-3 text-center">
              <p>
                Are you an {isAgent ? 'User' : 'Agent'}?{' '}
                <Link className="switch-link" onClick={() => setIsAgent(!isAgent)}>
                  Switch to {isAgent ? 'User' : 'Agent'} Register
                </Link>
              </p>
              <p>
                Already have an account? <Link className='switch-link' to='/login'>Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
