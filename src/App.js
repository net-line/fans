import './App.css';
import React, {  useContext, useEffect, useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Models from './pages/models';

import {Route, Routes, Navigate } from "react-router-dom";
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
import AuthContext from './context/testcontext';
import TimeLineOfUser from './components/lists/timelineoffollowed';
import AllSubscriptions from './components/lists/Subscriptions/allsubscriptions';
import SearchForTags from './components/sonstige/searchfortags';
//import Subscriptionmodal from './components/payment/subscriptionmodal';
import classes from "./app.module.css";



function App() {
const userCtx=useContext(AuthContext)
const [user,setUser] = useState(false)
useEffect(()=>{
  if(userCtx.isLoggedIn){
  setUser(userCtx)
  }
})
const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};


  return (
    <div className={classes.main}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Mainpage>
              {!userCtx.isLoggedIn && <Models />}
              {userCtx.isLoggedIn && <TimeLineOfUser />}
            </Mainpage>
          }
        />
        <Route
          path="/models"
          exact
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
              <SearchForTags />
              <FilteredApiGirls />
            </Mainpage>
          }
        />
        <Route
          path="/addcard"
          exact
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
          exact
          element={
            <Mainpage>
              <ProtectedRoute user={user}>
                <Collection />
              </ProtectedRoute>
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
          exact
          element={
            <Mainpage>
              <ProtectedRoute user={user}>
                <Favgirls />
              </ProtectedRoute>
            </Mainpage>
          }
        />
        <Route
          path="/subscriptions"
          exact
          element={
            <Mainpage>
              <ProtectedRoute user={user}>
                <AllSubscriptions />
              </ProtectedRoute>
            </Mainpage>
          }
        />
        <Route
          path="/privacy"
          element={
            <Mainpage>
              <Privacy />
            </Mainpage>
          }
        />
        <Route path="/agb" element={<AGB />} />
        <Route
        
          path="/:girlId"
          element={
            <Mainpage>
              <SearchForTags />
              <Detailsite />
            </Mainpage>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
