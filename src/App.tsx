import React from "react";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar.tsx";
import "./App.css";

import { Footer } from "./layouts/NavbarAndFooter/Footer.tsx";
import { HomePage } from "./layouts/HomePage/HomePage.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
