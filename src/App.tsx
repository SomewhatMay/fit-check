import "./App.css";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";
import { Feed } from "./routes/feed";
import { NavView } from "./components/nav-view";
import feedIcon from "./static/feed-icon.png";
import discoverIcon from "./static/discover-icon.png";
import cameraIcon from "./static/camera-icon.png";
import redeemIcon from "./static/redeem-icon.png";
import settingsIcon from "./static/setting-icon.png";
import { useMemo } from "react";

const version = "1.0";

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
          <>
            <div className="font-bold text-center text-8xl mt-[2rem]">
              Settings Page Under Development
            </div>
            <div className="text-center text-5xl mt-[2rem]">v{version}</div>
          </>
        ),
      },
    ],
    []
  );

  return (
    <div className="pb-[11.5rem]">
      <TopBar />
      <NavView children={pages} />
    </div>
  );
}

export default App;
