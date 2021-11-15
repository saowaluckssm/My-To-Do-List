import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { useNavigate } from "react-router";

const Logout = (props) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="navbar">
      <h1>Welcome to..</h1>
      <ul>
        <li className="btn btn-dark" onClick={handleLogout} value="Logout">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Logout;
