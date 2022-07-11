import React from "react";
import Modeladvertorial from "../Cards/modeladvertorial";
import { useStore } from "../store-hooks/store";



const Allgirls = (props) => {
   
    const state = useStore()[0];
    console.log("hier")
    console.log(state)
  return (
    <div>
      {state.postings.map((girl) => (
        <Modeladvertorial
          name={girl.pseudo}
          image={girl.profilepic}
          secondimage={girl.secondarypic}
          age={girl.age}
          numberofitems={girl.posts.length}
          key={girl.pseudo}
          isFav={girl.isFav}
          id={girl.id}
          mymotto={girl.mymotto}
        />
      ))}
    </div>
  );
};

export default Allgirls;
