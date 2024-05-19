import bellIcon from "../static/bell-icon.png";
import hamburgerIcon from "../static/hamburger-icon.png";

export function TopBar() {
  return (
    <div className="z-30 w-full h-[8rem] fixed top-0 font-bold px-[4rem] flex items-center bg-gray-50 shadow-md">
      <div className="flex-grow text-5xl">FitCheck</div>
      {[bellIcon, hamburgerIcon].map((icon) => (
        <img
          key={icon}
          src={icon}
          alt={icon}
          className="h-[3rem] ml-[2rem] aspect-square"
        />
      ))}
    </div>
  );
}
