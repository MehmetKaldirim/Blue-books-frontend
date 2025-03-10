import { NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const Navbar = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <SpinnerLoading />;
  }

  const handleLogout = async () => oktaAuth.signOut();

  console.log(authState);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">Mathweb Library</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/"
                end // For exact matching of the root path
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/search"
              >
                Search Books
              </NavLink>
            </li>
            {authState.isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shelf">
                    Shelf
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/messages">
                    Q/A
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/fees">
                    Fees
                  </NavLink>
                </li>
                {authState.accessToken?.claims?.sub ===
                  process.env.REACT_APP_ADMIN_USER && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      ADMIN
                    </NavLink>
                  </li>
                )}
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {!authState.isAuthenticated ? (
              <li className="nav-item m-1">
                <NavLink
                  type="button"
                  className="btn btn-outline-light"
                  to="/login"
                >
                  Sign in
                </NavLink>
              </li>
            ) : (
              <li className="nav-item m-1">
                <NavLink
                  type="button"
                  className="btn btn-outline-light"
                  to="/logout"
                  onClick={handleLogout}
                >
                  Log out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
