import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div>
        {/* <Discover /> */}
        <FitCheck />
      </div>
    </>
  );
}

export default App;
