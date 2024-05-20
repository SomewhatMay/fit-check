import { carouselImages } from "../../../../imageUrls";

interface props {
  index: number;
  fitName: string;
}

export function CarouselCard({ index, fitName }: props) {
  let extraStyles = "";
  let textStyle = "";
  let bgStyle = "";

  switch (index) {
    case 0:
      extraStyles = "translate-x-[2rem] h-[45rem] w-[20rem]";
      textStyle = "text-[2.5rem]";
      bgStyle = "bg-gray-300 translate";
      break;
    case 1:
      extraStyles =
        "translate-x-[0rem] h-[50rem] w-[25rem] translate-y-[5rem] z-10";
      textStyle = "text-[3rem] font-bold";
      bgStyle = "bg-gray-200 translate";
      break;
    case 2:
      extraStyles = "translate-x-[-2rem] h-[45rem] w-[20rem]";
      textStyle = "text-[2.5rem]";
      bgStyle = "bg-gray-300 translate";
      break;
  }

  return (
    <div className={`flex flex-col ${extraStyles}`}>
      <span className={`text-7xl text-center mb-5 ${textStyle}`}>
        {fitName}
      </span>
      <img
        src={carouselImages[index]}
        alt="fitImage"
        className={`shadow-md rounded-[2rem] block w-full h-full object-contain object-[0_1rem] ${bgStyle}`}
      />
    </div>
  );
}
