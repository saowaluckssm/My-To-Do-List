import {
  ADD_LIST,
  DELETE_LIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LIST,
  FILTER_LISTS,
  CLEAR_FILTER,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_LIST:
      // console.log(action.payload);
      localStorage.setItem(
        "lists",
        JSON.stringify([...state.lists, action.payload])
      );
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.id ? action.payload : list
        ),
      };
    case DELETE_LIST:
      localStorage.setItem(
        "lists",
        JSON.stringify(state.lists.filter((list) => list.id !== action.payload))
      );
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_LISTS:
      return {
        ...state,
        filtered: state.lists.filter((list) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return list.msg.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
