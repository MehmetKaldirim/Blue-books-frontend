import React from "react";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar.tsx";
import "./App.css";

import { Footer } from "./layouts/NavbarAndFooter/Footer.tsx";
import { HomePage } from "./layouts/HomePage/HomePage.tsx";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  );
}

export default App;
