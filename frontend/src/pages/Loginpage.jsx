import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, storeObjectInLocalStorage } from "../utils/cookie";
import axios from "axios";

function Login() {
  const [isAgent, setIsAgent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [alertMessage, setAlertMessage] = useState(null); 
  const [alertType, setAlertType] = useState(""); 

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password (minimum 6 characters)
    if (!password || password.length < 2) {
      setPasswordError("Password must be at least 2 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin";

    if (email === adminEmail && password === adminPassword) {
      setAlertMessage("Admin login successful!");
      setAlertType("success");
      setCookie("id", "admin", 1);
      setCookie("username", "admin", 1);
      setCookie("isAdmin", "true", 1);
      storeObjectInLocalStorage("userdata", { id: "admin", username: "admin", userType: "Admin" });
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
try {
      const apiEndpoint = isAgent
        ? "http://localhost:9090/api/agents/login"
        : "http://localhost:9090/api/user/login";
      const { data } = await axios.post(apiEndpoint, {
        email,
        password,
        userType: isAgent ? "Agent" : "User",
      });

      // Show success alert
      setAlertMessage("Login successful!");
      setAlertType("success");

      const { id, username } = data;

      // Set cookie and localStorage
      setCookie("id", id, 1);
      setCookie("username", username, 1);
      setCookie("isAgent", isAgent ? "agent" : "user", 1);
      storeObjectInLocalStorage("userdata", data);

      // Redirect after a short delay to show success message
      setTimeout(() => {
        isAgent ? navigate("/agent") : navigate("/");
      }, 2000);
    } catch (error) {
      setAlertMessage(
        `Login failed: ${error.response?.data?.message || error.message}`
      );
      setAlertType("danger");
    }
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

            {/*  alert */}
            {alertMessage && (
              <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                {alertMessage}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError ? "is-invalid" : ""}`}
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
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
