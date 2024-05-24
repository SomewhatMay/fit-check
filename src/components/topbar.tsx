import bellIcon from "../static/images/bell-icon.png";
import hamburgerIcon from "../static/images/hamburger-icon.png";
import shoppingCartIcon from "../static/images/shopping-cart-icon.png";
import logo from "../logo.png";

export function TopBar() {
  return (
    <div className="z-30 w-full h-[8rem] fixed top-0 font-bold px-[4rem] flex items-center bg-gray-50 shadow-md">
      <img
        src={logo}
        alt={""}
        className="h-[3.5rem] aspect-square mr-[1rem]"
      />
      <div className="flex-grow text-5xl">FitCheck</div>
      {[shoppingCartIcon, bellIcon, hamburgerIcon].map((icon) => (
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
