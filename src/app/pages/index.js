import React from "react";
import { Routes, Route } from "react-router-dom";
import { PatientData } from "./patient-data";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientData />} />
    </Routes>
  );
};

export default App;