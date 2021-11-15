import React, { useState, useContext, useEffect } from "react";
import ListContext from "../../context/list/listContext";

const ListForm = () => {
  const listContext = useContext(ListContext);
  // console.log(listContext);

  const { addList, updateList, current, clearCurrent } = listContext;

  const [inputText, setInputText] = useState({
    msg: "",
  });

  const { msg } = inputText;

  useEffect(() => {
    if (current !== null) {
      setInputText(current);
    } else {
      setInputText({
        msg: "",
      });
    }
  }, [listContext, current]);

  const handleChange = (e) => {
    // const newValue = e.target.value;

    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (current === null) {
      addList(inputText);
    } else {
      updateList(inputText);
      clearCurrent();
    }
    setInputText({
      msg: "",
    });
  };
  return (
    <div>
      <input onChange={handleChange} type="text" name="msg" value={msg} />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default ListForm;
