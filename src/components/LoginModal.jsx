import React from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    alert("Logged in successfully!");
    onLogin(); // Call the onLogin function to handle successful login
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
