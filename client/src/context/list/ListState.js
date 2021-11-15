import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ListContext from "./listContext";
import listReducer from "./listReducer";
import {
  ADD_LIST,
  DELETE_LIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LIST,
  FILTER_LISTS,
  CLEAR_FILTER,
} from "../types";

// Create lists to localstorage
const createLocalLists = (inputText) => {
  if (localStorage.getItem("lists") === null) {
    localStorage.setItem("lists", JSON.stringify([]));
  }
};

createLocalLists();

const ListState = (props) => {
  var storedNames = JSON.parse(localStorage.getItem("lists"));
  var lists = [...storedNames];
  console.log(lists);

  const initialState = {
    // lists: [
    //   {
    //     id: 1,
    //     msg: "yoga",
    //   },
    //   {
    //     id: 2,
    //     msg: "study",
    //   },
    //   {
    //     id: 3,
    //     msg: "eat",
    //   },
    // ],
    lists,

    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  // Add List
  const addList = (inputText) => {
    inputText.id = uuidv4();
    console.log(inputText);
    // localStorage.setItem("lists", JSON.stringify(inputText));
    dispatch({ type: ADD_LIST, payload: inputText });
  };

  // Delete List
  const deleteList = (id) => {
    console.log(id);
    dispatch({ type: DELETE_LIST, payload: id });
  };

  // Set Current List
  const setCurrent = (inputText) => {
    dispatch({ type: SET_CURRENT, payload: inputText });
  };

  // Clear Current List
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update List
  const updateList = (inputText) => {
    dispatch({ type: UPDATE_LIST, payload: inputText });
  };

  // Filter Lists
  const filterLists = (text) => {
    dispatch({ type: FILTER_LISTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        current: state.current,
        filtered: state.filtered,
        createLocalLists,
        addList,
        deleteList,
        setCurrent,
        clearCurrent,
        updateList,
        filterLists,
        clearFilter,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
