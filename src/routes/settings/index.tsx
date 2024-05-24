import { version } from "../../App";
import { useSettingsOptions } from "../../contexts/settings-options-context";
import { SettingOption } from "./setting-option";

export function SettingsPage() {
  const settingsOptions = useSettingsOptions();

  return (
    <div>
      <div className="text-7xl w-full px-[2rem] my-[2rem] text-center mt-[4rem] mb-[1rem]">
        Settings
      </div>
      <div className="text-center text-2xl text-gray-400 mt-[0rem]">
        v{version}
      </div>

      <div>
        {Object.keys(settingsOptions).map((category) => (
          <div key={category}>
            <div className="text-5xl bg-gray-50 px-[3rem] py-[1rem] font-bold mb-[1rem] mt-[2.5rem]">
              {category}
            </div>
            {settingsOptions[category].map((settingOption) => (
              <SettingOption
                key={settingOption.id}
                data={settingOption}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="text-2xl text-gray-500 px-[3rem] py-[1rem] mb-[1.5rem] mt-[2rem] text-center">
        FitCheck is still under development. Expect bugs and/or issues.
      </div>
    </div>
  );
}
