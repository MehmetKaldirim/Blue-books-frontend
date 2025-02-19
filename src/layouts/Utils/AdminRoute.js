import { useOktaAuth } from "@okta/okta-react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminRoute = () => {
  const { authState } = useOktaAuth();

  // Adding a fallback to avoid crashes if an error occurs
  try {
    if (!authState || !authState.accessToken) {
      throw new Error("Authentication failed");
    }

    // Admin kontrolü
    const userSub = authState.accessToken?.claims?.sub;
    console.log("usersub " + userSub);

    if (userSub !== process.env.REACT_APP_ADMIN_USER) {
      toast.error("You're not an admin.", {
        position: "top-center",
        autoClose: 2000,
      });
      return <Navigate to="/" replace />;
    }

    // Eğer adminse, normal route'a devam et
    return <Outlet />;
  } catch (error) {
    // Hata durumunda ana sayfaya yönlendir
    console.error("Error in AdminRoute:", error);
    toast.error("An error occurred. Redirecting to the home page.", {
      position: "top-center",
      autoClose: 2000,
    });
    return <Navigate to="/" replace />;
  }
};

export default AdminRoute;
