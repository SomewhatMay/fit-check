import { createContext, useContext } from "react";
import settingsOptions from "../static/data/settings-options.json";

export interface SettingOption {
  id: number;
  title: string;
  value: string;
}

export interface SettingsContainer {
  [category: string]: SettingOption[];
}

const settingsOptionsContext = createContext<SettingsContainer | undefined>(
  undefined
);

export function useSettingsOptions(): SettingsContainer {
  const posts = useContext(settingsOptionsContext);

  if (!posts) {
    throw new Error("useSettingsOptions must be used within a PostsProvider");
  }

  return posts;
}

export function SettingsOptionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <settingsOptionsContext.Provider value={settingsOptions}>
      {children}
    </settingsOptionsContext.Provider>
  );
}
