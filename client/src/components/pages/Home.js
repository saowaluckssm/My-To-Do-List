import React, { Fragment } from "react";
import Logout from "../layout/Logout";
import Lists from "../lists/Lists";
import ListForm from "../lists/ListForm";
import ListFilter from "../lists/ListFilter";

const Home = () => {
  return (
    <Fragment>
      <Logout />
      <div className="form-container">
        <h1>My To-Do List</h1>
        <ListFilter />
        <ListForm />

        <Lists />
      </div>
    </Fragment>
  );
};

export default Home;
