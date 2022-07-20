import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  logindata: "",
  pseudo: "",
  userID: "",
  isLoggedIn: false,
  login: (token, logindata, pseudo, userID) => {},
  logout: () => {},
  fanDollar:"",
  premiumtoken: "",
  isPremium: false,
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [logindata, setLogindata] = useState(null);
  const [pseudo, setPseudo] = useState(null);
  const [userID, setUserID] = useState(null);
  const [premiumToken, setPremiumToken] = useState(null);
  const [fanDollar, setFanDollar]=useState(null)
  const userIsLoggedIn = !!token;
  const userIsPremium = !!premiumToken;

  const loginHandler = (token, logindata, pseudo, userID, fanDollar) => {
    setToken(token);
    setLogindata(logindata);
    setPseudo(pseudo);
    setUserID(userID);
    setFanDollar(fanDollar)
  };

  const logoutHandler = () => {
    setToken(null);
     setLogindata(null);
     setPseudo(null);
     setUserID(null);
     setFanDollar(null);
    
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
    fanDollar:fanDollar,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
