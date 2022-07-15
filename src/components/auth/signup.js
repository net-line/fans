import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../context/testcontext";
import classes from "./signup.module.css";


function AuthForm() {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();
  const pseudoInputRef =useRef();
 // const nickInputRef = useRef();
 const authctx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
 
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }


  async function submitHandler(event) {
    event.preventDefault();

    
        const enteredPseudo = pseudoInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //add validation

    if(isLogin){
      fetch("https://api.deine.fans/api/userlogin", {
        method: "POST",
        body: JSON.stringify({
          pseudo: enteredPseudo,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.ok) {
             res.json().then((data) => {
               console.log(data.login);
               authctx.login(
                 data.authToken,
                 data.login,
                 data.pseudo,
                 data.userID
               );
             });
          } else {
            throw new Error("Fehler");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
       const enteredPassword2 = password2InputRef.current.value;
       const enteredEmail = emailInputRef.current.value;
      //Send POST um User anzulegen
      fetch("https://api.deine.fans/api/userlogin", {
        method: "put",
        body: JSON.stringify({
          pseudo: enteredPseudo,
          password: enteredPassword,
          passwordrepeat: enteredPassword2,
          email: enteredEmail
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            
            console.log(data.authToken);
           
            authctx.login(
              data.authToken,
              data.login,
              data.pseudo,
              data.userID
            );
           
          });
        } else {
          res.json().then((data) => {
            //FehlerAnzeige
            console.log(data);
          });
        }
      });
      console.log(enteredEmail, enteredPassword);
    }
   
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
       <div className={classes.control}>
          <label htmlFor="text">Dein Username</label>
          <input type="text" id="text" required ref={pseudoInputRef} />
        </div>
         {!isLogin&&<div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>}
        <div className={classes.control}>
          <label htmlFor="password">Dein Passwort</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin&&<div className={classes.control}>
          <label htmlFor="password">Wiederhole Passwort</label>
          <input
            type="password"
            id="password"
            required
            ref={password2InputRef}
          />
        </div>}
        {/* {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="nick">Your Nickname</label>
            <input type="name" id="name" required ref={nickInputRef} />
          </div>
        )} */}
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
