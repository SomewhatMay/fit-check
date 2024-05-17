import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div>
        <FitCheck />
      </div>
    </>
  );
}

export default App;
