import React from "react";
import { ProfileCard } from "./components/profile-card";
import { RecommendedCarousel } from "./components/recommended-carousel/recommended-carousel";

export function FitCheck() {
  return (
    <>
      <ProfileCard />
      <RecommendedCarousel />
    </>
  );
}
