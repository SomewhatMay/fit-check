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
import { useEffect, useMemo } from "react";
import { SettingsPage } from "./routes/settings";
import { Modal } from "./components/modal";
import { useSetModal } from "./contexts/modal-context";

/* Constants */
export const version = "1.4.1";
export const homePage = 2;

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

  /* Warn the user regarding the development status */
  const setModal = useSetModal();
  useEffect(
    () =>
      setModal(
        "Warning!",
        `This is a concept application still under development; expect bugs and/or issues. Many buttons are not functional/responsive. v${version}.`
      ),
    []
  );

  return (
    <>
      <div className="pb-[11.5rem]">
        <TopBar />
        <NavView children={pages} />
      </div>
      <Modal />
    </>
  );
}

export default App;
