import { SettingOption as SettingOptionType } from "../../contexts/settings-options-context";

interface props {
  data: SettingOptionType;
}

export function SettingOption({ data }: props) {
  return (
    <div className="text-5xl mt-[0rem] px-[3rem] py-[1.5rem] flex justify-between transition-all hover:bg-gray-50">
      <span>{data.title}</span>
      <span className="text-gray-500">
        {data.value} {">"}
      </span>
    </div>
  );
}
