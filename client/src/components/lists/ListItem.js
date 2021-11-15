import React, { useContext } from "react";
import PropTypes from "prop-types";
import ListContext from "../../context/list/listContext";

const ListItem = ({ list }) => {
  const listContext = useContext(ListContext);
  const { deleteList, setCurrent, clearCurrent } = listContext;
  const { id, msg } = list;

  const onDelete = () => {
    deleteList(id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="list-item">{msg}</h3>
      <div className="button-group">
        <button
          className="btn btn-success btn-sm"
          onClick={() => setCurrent(list)}
        >
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
};

export default ListItem;
