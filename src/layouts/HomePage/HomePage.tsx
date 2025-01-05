import React from "react";
import { Carousel } from "./components/Carousel.tsx";
import { ExploreTopBooks } from "./components/ExploreTopBooks.tsx";
import { Heros } from "./components/Heros.tsx";
import { LibraryServices } from "./components/LibraryServices.tsx";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
