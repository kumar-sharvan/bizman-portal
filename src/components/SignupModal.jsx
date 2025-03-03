import React from "react";

const SignupModal = ({ onClose, onSignup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call)
    alert("Signed up successfully!");
    onSignup(); // Call the onSignup function to handle successful signup
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="newPassword">Password</label>
          <input type="password" id="newPassword" name="newPassword" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
