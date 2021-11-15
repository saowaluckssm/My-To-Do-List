import React, { useContext, useRef, useEffect } from "react";
import ListContext from "../../context/list/listContext";

const ListFilter = () => {
  const listContext = useContext(ListContext);
  const text = useRef("");

  const { filterLists, clearFilter, filtered } = listContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      console.log(e.target.value);
      filterLists(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter List..."
        onChange={onChange}
      />
    </form>
  );
};

export default ListFilter;
