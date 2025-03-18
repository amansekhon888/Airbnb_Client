import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../services/slices/AuthSlice";
import { RootState } from "../store/store";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation(); // ✅ Get current route

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setOpenModal(true)); // ✅ Open login modal
      sessionStorage.setItem("protectedPage", location.pathname); // ✅ Save last attempted route
    }
  }, [isAuthenticated, dispatch, location.pathname]);

  if (!isAuthenticated) {
    return null; // ✅ Prevent rendering protected content
  }

  return children;
};

export default ProtectedRoute;
