import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
    case LOGOUT:
      sessionStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
