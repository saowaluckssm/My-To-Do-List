import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/auth/Login";

import ListState from "./context/list/ListState";
import AuthState from "./context/auth/AuthState";

import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

const App = (props) => {
  return (
    <AuthState>
      <ListState>
        <Router>
          <Fragment>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </Fragment>
        </Router>
      </ListState>
    </AuthState>
  );
};

export default App;
