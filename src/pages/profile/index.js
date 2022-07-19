import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PaymentMethods from "../../components/payment/paymentmethods";
import AuthContext from "../../context/testcontext";
//import AddCard from "../addcard";
//import ManageCard from "./managecard";

const Profile = () => {
  const authCtx=useContext(AuthContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Fragment>
      <h1>Hallo {authCtx.pseudo}</h1>
      {/* {authCtx.isPremium && <ManageCard />}
      {!authCtx.isPremium && <AddCard />} */}
      {authCtx.isLoggedIn&&<PaymentMethods />}
      <Link to="/favs">Deine Favoriten</Link>
    </Fragment>
  );
};

export default Profile;
