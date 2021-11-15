import { CHECK_INPUT, CHECK_BLUR, RESET } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CHECK_INPUT:
      return {
        value: action.value,
        isTouched: state.value,
      };
    case CHECK_BLUR:
      return {
        isTouched: true,
        value: state.value,
      };
    case RESET:
      return {
        isTouched: false,
        value: "",
      };

    default:
      return state;
  }
};
