import { ProfileCard } from "../../components/profile-card";
import { RecommendedCarousel } from "./components/recommended-carousel/";
import { FitBuilder } from "./components/fit-builder";
import { TryOnButton } from "./components/try-on-button";

export function FitCheck() {
  return (
    <>
      <ProfileCard />
      <RecommendedCarousel />
      <TryOnButton />
      <FitBuilder />
    </>
  );
}
