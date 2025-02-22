import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import "./App.css";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget.jsx";
import { ReviewListPage } from "./layouts/BookCheckoutPage/ReviewListPage/RiviewListPage";
import { ShelfPage } from "./layouts/BookCheckoutPage/ShelfPage/ShelfPage";
import { MessagesPage } from "./layouts/MessagesPage/MessagesPage";
import SecureRoute from "./layouts/Utils/SecureRoute";
import AdminRoute from "./layouts/Utils/AdminRoute";
import { ManageLibraryPage } from "./layouts/ManageLibraryPage/ManageLibraryPage";
import { PaymentPage } from "./layouts/PaymentPage/PaymentPage";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin), {
      replace: true,
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/reviewlist/:bookId" element={<ReviewListPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route
              path="/login"
              element={<LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" element={<LoginCallback />} />
            {/* 🔥 SecureRoute için özel Route tanımla */}
            <Route element={<SecureRoute />}>
              <Route path="/shelf" element={<ShelfPage />} />
            </Route>
            <Route element={<SecureRoute />}>
              <Route path="/messages" element={<MessagesPage />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<ManageLibraryPage />} />
            </Route>
            <Route element={<SecureRoute />}>
              <Route path="/fees" element={<PaymentPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Security>
    </div>
  );
}

export default App;
