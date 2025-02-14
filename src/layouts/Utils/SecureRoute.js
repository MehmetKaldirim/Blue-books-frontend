import { useOktaAuth } from "@okta/okta-react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const { authState } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default SecureRoute;
