import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../context/testcontext";
import classes from "./signup.module.css";


function AuthForm() {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
 // const nickInputRef = useRef();
 const authctx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
 
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }


  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
   
    //add validation
    if(isLogin){
      fetch(`https://api.deine.fans/api/userlogin?pseudo=${enteredEmail}&password=${passwordInputRef}`)
      .then((res) =>{
        console.log(res)
      if(res.ok){
       authctx.login("DUMMYTOKEN")
        return res.json()
      }else{
        throw new Error("Fehler")
      }
    }).catch((err)=>{
      console.log(err)
    })
    }else{
      //Send POST um User anzulegen
      /* fetch(url,{
        method: 'POST',
        body: JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnsecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res =>{
        if (res.ok){

        }else{
          res.json().then(data =>{
            //FehlerAnzeige
            console.log(data);
          })
        }
      }); */
      console.log(enteredEmail, enteredPassword);
    }
   
  }

  return (
    <section className={classes.auth}>
       
      
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
