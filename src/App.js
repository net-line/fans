import './App.css';
import React, { Fragment } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './layout/footer';
import Models from './pages/models';
import Header from "./layout/header";
import {Route, Routes } from "react-router-dom";
import Privacy from './pages/privacy';
import AGB from './pages/agb';
import Mainpage from "./layout/mainpage";
import Detailsite from './pages/detail';
import Favgirls from './components/lists/favgirls';

function App() {




  return (
    <Fragment>
      <Header />
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
