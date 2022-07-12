import './App.css';
import React, { Fragment } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './layout/footer';
import Models from './pages/models';

import {Route, Routes } from "react-router-dom";
import Privacy from './pages/privacy';
import AGB from './pages/agb';
import Mainpage from "./layout/mainpage";
import Detailsite from './pages/detail';
import Favgirls from './components/lists/favgirls';
import Login from './pages/login';


function App() {




  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Mainpage>
              <Models />
            </Mainpage>
          }
        />
        <Route
          path="/models"
          element={
            <Mainpage>
              <Models />
            </Mainpage>
          }
        />
        <Route
          path="/login"
          element={
            <Mainpage>
              <Login />
            </Mainpage>
          }
        />
        <Route
          path="/favs"
          element={
            <Mainpage>
              <Favgirls />
            </Mainpage>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/agb" element={<AGB />} />
        <Route
          path="/:girlId"
          
          element={
            <Mainpage>
              <Detailsite />
            </Mainpage>
          }
        />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
