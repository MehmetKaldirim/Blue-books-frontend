import React from "react";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar.tsx";
import "./App.css";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks.tsx";
import { Carousel } from "./layouts/HomePage/Carousel.tsx";
import { Heros } from "./layouts/HomePage/Heros.tsx";
import { LibraryServices } from "./layouts/HomePage/LibraryServices.tsx";
import { Footer } from "./layouts/NavbarAndFooter/Footer.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default App;
