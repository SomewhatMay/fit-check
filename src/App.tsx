import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { FitCheck } from "./routes/fit-check";

function App() {
  return (
    <>
      <FitCheck />
      <Navbar />
    </>
  );
}

export default App;
