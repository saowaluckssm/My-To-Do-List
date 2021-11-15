import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: sessionStorage.getItem("token"),
    isAuthenticated: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Login User
  const login = async (formData) => {
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("http://localhost:5000/", formData, config);
      console.log(res);
      console.log(res.data.user_token);
      console.log(res.status);

      if (res.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.user_token,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response,
      });
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,

        error: state.error,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
