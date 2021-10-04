import React from "react";
import "./styles/app.css";
import Header from "./componetnts/header/Header.jsx";
import Navbar from "./componetnts/navbar/Navbar.jsx";
import Profile from "./componetnts/profile/Profile.jsx";

function App() {
  return (
    <div className="app-Wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
