import React, { useState } from "react";
// import "./LoginForm.css";

const LoginForm = () => {
  // State for storing form values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // For toggling password visibility
  const [rememberMe, setRememberMe] = useState(false); // For 'Remember Me'

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (username === "" || password === "") {
      setError("Username and password are required.");
      return;
    }

    // Simulate login process
    if (username === "user" && password === "password") {
      setIsSubmitted(true);
      setError("");

      if (rememberMe) {
        // Store in localStorage if 'Remember Me' is checked
        localStorage.setItem("username", username);
      } else {
        localStorage.removeItem("username");
      }
    } else {
      setError("Invalid username or password.");
    }
  };

  // Handle changes in username and password inputs
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle toggling password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle 'Remember Me' checkbox change
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // Retrieve stored username on component mount (if "Remember Me" was used)
  React.useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setRememberMe(true);
    }
  }, []);

  if (isSubmitted) {
    return <h2>Welcome, {username}!</h2>;
  }

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="form-group remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
