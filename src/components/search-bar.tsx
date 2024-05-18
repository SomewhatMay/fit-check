import logo from "../logo.svg";

export function SearchBar() {
  return (
    <div className="mx-[2.5rem] rounded-full bg-gray-300 text-4xl flex items-center">
      <img
        src={logo}
        alt="Search icon"
        className="object-contain h-[7rem] w-[7rem] aspect-square ml-[1rem]"
      />
      <span className="pl-[0.5rem] pr-[2rem] py-[2.5rem] flex-grow">
        Search
      </span>
    </div>
  );
}
