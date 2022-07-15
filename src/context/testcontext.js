import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  logindata:"",
  pseudo:"",
  userID:"",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},


  premiumtoken: "",
  isPremium: false,

});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [logindata, setLogindata] = useState(null);
  const [pseudo, setPseudo] = useState(null);
  const [userID, setUserID] = useState(null);
  const [premiumToken, setPremiumToken] = useState(null);

  const userIsLoggedIn = !!token;
  const userIsPremium = !!premiumToken;

  const loginHandler = (token,logindata,pseudo,userID) => {
    setToken(token);
    setLogindata(logindata);
    setPseudo(pseudo);
    setUserID(userID);
  };

  const logoutHandler = () => {
    setToken(null);
     setLogindata(null);
     setPseudo(null);
     setUserID(null);
    
  };
  const bePremiumHandler = (premiumToken) =>{
    setPremiumToken(premiumToken);
  }
  const dontBePremiumHandler = () => {
    setPremiumToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logindata:logindata,
    pseudo:pseudo,
    userID:userID,
    login: loginHandler,
    logout: logoutHandler,
    premiumToken:premiumToken,
    isPremium:userIsPremium,
    bePremium: bePremiumHandler,
    dontBePremium: dontBePremiumHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
