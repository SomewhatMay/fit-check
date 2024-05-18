import "./App.css";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";
import { Feed } from "./routes/feed";
import { NavView } from "./components/nav-view";
import logo from "./logo.svg";
import { useMemo } from "react";

function App() {
  const pages = useMemo(
    () => [
      {
        icon: logo,
        node: <Feed />,
      },
      {
        icon: logo,
        node: <Discover />,
      },
      {
        icon: logo,
        node: <FitCheck />,
      },
      {
        icon: logo,
        node: <Redeem />,
      },
      {
        icon: logo,
        node: (
          <div className="font-bold text-center text-8xl">
            Settings Page Under Development
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <TopBar />
      <NavView children={pages} />
    </>
  );
}

export default App;
