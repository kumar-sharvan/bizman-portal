import React from "react";

const Hero = ({ onGetStartedClick }) => {
  return (
    <section className="hero">
      <h1>Streamline Your Retail Business with BizMan</h1>
      <p>Manage your inventory, sales, and customers with ease.</p>
      <button onClick={onGetStartedClick}>Get Started</button>
    </section>
  );
};

export default Hero;
