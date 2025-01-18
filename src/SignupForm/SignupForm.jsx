import React, { useState } from "react";
import "./styles.css";

// Mock API endpoint
const API_ENDPOINT = "https://your-backend-api.com/signup";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.username.trim()) {
      formErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    return formErrors;
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});

      // Make an API call to submit the form
      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          // Handle API errors (e.g., user already exists)
          const data = await response.json();
          setErrors({
            apiError: data.message || "Signup failed. Please try again.",
          });
        }
      } catch (error) {
        setErrors({ apiError: "Network error. Please try again later." });
      }
    } else {
      setErrors(formErrors); // Set validation errors
    }
  };

  if (submitted) {
    return <h2>Signup successful! Welcome, {formData.username}!</h2>;
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        {errors.apiError && <p className="error">{errors.apiError}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
