import './App.css';
import React, { Fragment} from 'react';

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
import Collection from './pages/collection';
import AddCard from './pages/addcard';
import Profile from './pages/profile';
import ManageCard from './pages/profile/managecard';
import FilteredApiGirls from './components/lists/filteredapigirls';



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
          strict
          element={
            <Mainpage>
              <Models />
            </Mainpage>
          }
        />
        <Route
          path="/models/:filterID"
          element={
            <Mainpage>
             <FilteredApiGirls />
            </Mainpage>
          }
        />
        <Route
          path="/addcard"
          element={
            <Mainpage>
              <AddCard />
            </Mainpage>
          }
        />
        <Route
          path="/profile"
          exact
          element={
            <Mainpage>
              <Profile />
            </Mainpage>
          }
        />
        <Route
          path="/profile/managecard"
          element={
            <Mainpage>
              <ManageCard />
            </Mainpage>
          }
        />
        <Route
          path="/collection"
          element={
            <Mainpage>
              <Collection />
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
