import { CarouselCard } from "./carousel-card";

export function RecommendedCarousel() {
  return (
    <div className="h-[60rem] mt-[2rem] pt-[2rem] w-full flex">
      <CarouselCard
        index={0}
        fitName="Pool Party"
      />
      <CarouselCard
        index={1}
        fitName="Daily Fit"
      />
      <CarouselCard
        index={2}
        fitName="Nightcore Style"
      />
    </div>
  );
}
