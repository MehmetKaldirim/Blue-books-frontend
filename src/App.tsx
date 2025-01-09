import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar.tsx";
import "./App.css";
import { Footer } from "./layouts/NavbarAndFooter/Footer.tsx";
import { HomePage } from "./layouts/HomePage/HomePage.tsx";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage.tsx";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage.tsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchBooksPage />} />
          <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
