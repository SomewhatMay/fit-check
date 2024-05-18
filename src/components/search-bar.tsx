import logo from "../logo.svg";

export function SearchBar() {
  return (
    <div className="mx-[2.5rem] mt-[2rem] rounded-full bg-gray-300 flex items-center">
      <img
        src={logo}
        alt="Search icon"
        className="object-contain h-[6rem] aspect-square ml-[1.25rem]"
      />
      <span className="pl-[0.5rem] pr-[2rem] py-[1.5rem] text-[2.5rem] flex-grow text-gray-700">
        Search
      </span>
    </div>
  );
}
