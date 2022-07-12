import React, { useState, useRef } from "react";
import classes from "./signup.module.css";



async function createUser(email, password, nickname) {
  
}

function AuthForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nickInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);


  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }


  async function submitHandler(event) {
    event.preventDefault();
   setIsLoggedIn(true);
  }

  return (
    <section className={classes.auth}>
        {isLoggedIn && <h1>hallo</h1>}
        <button onClick={createUser}></button>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="nick">Your Nickname</label>
            <input type="name" id="name" required ref={nickInputRef} />
          </div>
        )}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
