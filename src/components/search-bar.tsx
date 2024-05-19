import searchIcon from "../static/search-icon.png";

export function SearchBar() {
  return (
    <div className="mx-[2.5rem] mt-[2rem] h-[6rem] rounded-full bg-gray-300 items-center relative">
      <img
        src={searchIcon}
        alt="Search icon"
        className="object-contain inline h-full p-[1.5rem] aspect-square ml-[1.25rem] absolute"
      />
      <span className="pl-[0.5rem] text-center pr-[2rem] py-[1.5rem] text-[2.5rem] absolute w-full text-gray-700">
        Search
      </span>
    </div>
  );
}
