import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";
import { Feed } from "./routes/feed";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="pb-[14rem]">
        {/* <Discover /> */}
        {/* <FitCheck /> */}
        {/* <Redeem /> */}
        <Feed />
      </div>
    </>
  );
}

export default App;
