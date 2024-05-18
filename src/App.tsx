import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div>
        {/* <Discover /> */}
        {/* <FitCheck /> */}
        <Redeem />
      </div>
    </>
  );
}

export default App;
