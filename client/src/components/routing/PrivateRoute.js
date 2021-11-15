import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const authContext = useContext(AuthContext);
  // const navigate = useNavigate();
  const { isAuthenticated } = authContext;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
