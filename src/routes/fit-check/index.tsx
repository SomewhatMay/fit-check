import { ProfileCard } from "../../components/profile-card";
import { RecommendedCarousel } from "./components/recommended-carousel/";
import { FitBuilder } from "./components/fit-builder";
import { TryOnButton } from "./components/try-on-button";
import { AddToWardrobe } from "./components/add-to-wardrobe";

export function FitCheck() {
  return (
    <>
      <ProfileCard />
      <RecommendedCarousel />
      <TryOnButton />
      <FitBuilder />
      <AddToWardrobe />
    </>
  );
}
