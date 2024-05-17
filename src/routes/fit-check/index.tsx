import React from "react";
import { ProfileCard } from "./components/profile-card";
import { RecommendedCarousel } from "./components/recommended-carousel/";
import { FitBuilder } from "./components/fit-builder";

export function FitCheck() {
  return (
    <>
      <ProfileCard />
      <RecommendedCarousel />
      <FitBuilder />
    </>
  );
}
