import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, setOpenModal } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setOpenModal(true); // Open modal if user is not logged in
    }
  }, [isAuthenticated, setOpenModal]);

  if (!isAuthenticated) {
    return null; // Prevent rendering the protected component
  }

  return children;
};

export default ProtectedRoute;
