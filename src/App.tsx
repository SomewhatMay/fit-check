import "./App.css";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";
import { Feed } from "./routes/feed";
import { NavView } from "./components/nav-view";
import logo from "./logo.svg";
import feedIcon from "./static/feed-icon.png";
import discoverIcon from "./static/discover-icon.png";
import cameraIcon from "./static/camera-icon.png";
import redeemIcon from "./static/redeem-icon.png";
import settingsIcon from "./static/setting-icon.png";
import { useMemo } from "react";

function App() {
  const pages = useMemo(
    () => [
      {
        icon: feedIcon,
        node: <Feed />,
      },
      {
        icon: discoverIcon,
        node: <Discover />,
      },
      {
        icon: cameraIcon,
        node: <FitCheck />,
      },
      {
        icon: redeemIcon,
        node: <Redeem />,
      },
      {
        icon: settingsIcon,
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
