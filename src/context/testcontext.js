import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  premiumtoken: "",
  isPremium: false,

});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [premiumToken, setPremiumToken] = useState(null);

  const userIsLoggedIn = !!token;
  const userIsPremium = !!premiumToken;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
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
