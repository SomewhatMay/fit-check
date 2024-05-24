import mobileIcon from "../static/images/mobile-icon.png";

export function MobileForcer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="block sm:hidden">{children}</div>
      <div className="absolute sm:block hidden w-[20vw] font-bold text-center text-7xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <img
          src={mobileIcon}
          alt="mobile icon"
          className="h-[25rem] relative left-1/2 translate-x-[-50%] aspect-square"
        />
        <div>Please use a mobile device to view this page.</div>
      </div>
      <div className="absolute sm:block hidden w-[20vw] font-bold text-center text-3xl text-gray-400 left-1/2 translate-x-[-50%] bottom-[10rem]">
        FitCheck is still under development. Expect bugs and/or issues.
      </div>
    </>
  );
}
