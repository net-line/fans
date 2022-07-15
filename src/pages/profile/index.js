import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/testcontext";
import AddCard from "../addcard";
import ManageCard from "./managecard";

const Profile = () => {
  const authCtx=useContext(AuthContext)
  
  return (
    <Fragment>
      <h1>Hallo {authCtx.pseudo}</h1>
      {authCtx.isPremium && <ManageCard />}
      {!authCtx.isPremium && <AddCard />}
      <Link to="/favs">Deine Favoriten</Link>
    </Fragment>
  );
};

export default Profile;
