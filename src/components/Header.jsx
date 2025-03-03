import React from "react";

const Header = ({ onLoginClick, onSignupClick }) => {
  return (
    <header>
      <div className="logo">BizMan</div>
      <nav>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button onClick={onLoginClick}>Log In</button>
        <button onClick={onSignupClick}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
