import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="min-h-screen mx-auto ">
      <Modal/>
      <LandingPage/>
    </div>
  )
}

export default App