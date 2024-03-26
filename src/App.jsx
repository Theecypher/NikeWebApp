import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Onboarding/userSignup";
import Navbar from "./Pages/Navbar";
import Sidebar from "./Components/sidebar";
import Hero from "./Pages/Hero/hero";
import LandingPage from "./Pages/landingPage";

function App() {
  return (
    <div className="">
      {/* <Signup /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
