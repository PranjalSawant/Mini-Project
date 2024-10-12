import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, storeObjectInLocalStorage } from "../utils/cookie";
import axios from "axios";

function Login() {
  const [isAgent, setIsAgent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiEndpoint = isAgent
        ? "http://localhost:9090/api/agents/login" // Agent signup endpoint
        : "http://localhost:9090/api/user/login";
      const { data } = await axios.post(apiEndpoint, {
        email,
        password,
        userType: isAgent ? "Agent" : "User",
      });

      console.log("Login successful", data);
      const { id, username } = data;

      // set cookie for later
      setCookie("id", id, 1);
      setCookie("username", username, 1);
      setCookie("isAgent", isAgent ? "agent" : "user", 1);
      // store userdata in localstorage
      storeObjectInLocalStorage("userdata", data);

      // redirect based on user type
      isAgent ? navigate("/agent") : navigate("/");
    } catch (error) {
      console.error(
        "Login failed",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="container">
      <div className="py-lg-5"></div>
      <div className="py-lg-5 py-3"></div>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="custom-form p-lg-5">
            <h2 className="form-header text-center">
              {isAgent ? "Agent" : "User"} Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
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
              <button type="submit" className="btn btn-success my-3 w-100">
                Login
              </button>
            </form>

            <div className="mt-3 text-center">
              <p>
                Are you an {isAgent ? "User" : "Agent"}?{" "}
                <Link
                  className="switch-link"
                  onClick={() => setIsAgent(!isAgent)}
                >
                  Switch to {isAgent ? "User" : "Agent"} Login
                </Link>
              </p>
              <p>
                Don't have an account?{" "}
                <Link className="switch-link" to="/register">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
