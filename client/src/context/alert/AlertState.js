import { useReducer } from "react";

import alertReducer from "./alertReducer";
import { CHECK_INPUT, CHECK_BLUR, RESET } from "../types";

const AlertState = (props) => {
  const initialState = { value: "", isTouched: false };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const valueIsValid = state.value;
  const hasError = !valueIsValid && state.isTouched;

  // Check input change
  const valueChangeHandler = (e) => {
    dispatch({ type: CHECK_INPUT, value: e.target.value });
  };

  // Check input Blur
  const inputBlurHandler = () => {
    dispatch({ type: CHECK_BLUR });
  };

  // Reset value
  const reset = () => {
    dispatch({ type: RESET });
  };

  // return (
  //   <AlertContext.Provider
  //     value={{
  //       value: state.value,
  //       isValid: valueIsValid,
  //       hasError,
  //       valueChangeHandler,
  //       inputBlurHandler,
  //       reset,
  //     }}
  //   >
  //     {props.children}
  //   </AlertContext.Provider>
  // );

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default AlertState;
