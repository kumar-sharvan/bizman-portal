import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true
    setShowLoginModal(false); // Close the login modal
  };

  const handleSignup = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true
    setShowSignupModal(false); // Close the signup modal
  };

  return (
    <Router>
      <div className="App">
        <Header
          onLoginClick={() => setShowLoginModal(true)}
          onSignupClick={() => setShowSignupModal(true)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isLoggedIn ? (
                  <Navigate to="/dashboard" /> // Redirect to dashboard if logged in
                ) : (
                  <>
                    <Hero onGetStartedClick={() => setShowSignupModal(true)} />
                    <Features />
                    <Footer />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} // Redirect to home if not logged in
          />
        </Routes>
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        )}
        {showSignupModal && (
          <SignupModal
            onClose={() => setShowSignupModal(false)}
            onSignup={handleSignup}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
