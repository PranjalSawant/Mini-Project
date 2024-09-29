import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isAgent, setIsAgent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the login data in JSON format
    const loginData = {
      email: email,
      password: password,
      userType: isAgent ? 'Agent' : 'User' // Send either 'Agent' or 'User' based on state
    };

    try {
      // Perform a POST request to your backend login API (replace with actual endpoint)
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      
      // Handle the response (e.g., store tokens, redirect, display error messages)
      if (response.ok) {
        // Successful login - handle redirection or token storage
        console.log('Login successful', result);
      } else {
        // Login failed - show error message
        console.error('Login failed', result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <div className="py-lg-5"></div>
      <div className="py-lg-5 py-3"></div>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="custom-form p-lg-5">
            <h2 className="form-header text-center">{isAgent ? 'Agent' : 'User'} Login</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-success my-3 w-100">Login</button>
            </form>

            <div className="mt-3 text-center">
              <p>
                Are you an {isAgent ? 'User' : 'Agent'}?{' '}
                <Link className="switch-link" onClick={() => setIsAgent(!isAgent)}>
                  Switch to {isAgent ? 'User' : 'Agent'} Login
                </Link>
              </p>
              <p>
                Don't have an account? <Link className='switch-link' to='/register'>Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
