import "./App.css";
import { FitCheck } from "./routes/fit-check";
import { TopBar } from "./components/topbar";
import { Discover } from "./routes/discover";
import { Redeem } from "./routes/redeem";
import { Feed } from "./routes/feed";
import { NavView } from "./components/nav-view/nav-view";
import feedIcon from "./static/images/feed-icon.png";
import discoverIcon from "./static/images/discover-icon.png";
import cameraIcon from "./static/images/camera-icon.png";
import redeemIcon from "./static/images/redeem-icon.png";
import settingsIcon from "./static/images/setting-icon.png";
import { useMemo } from "react";
import { SettingsPage } from "./routes/settings";

/* Constants */
export const version = "1.3.5";
export const homePage = 4;

/* Root App Component */
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
        node: <SettingsPage />,
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
