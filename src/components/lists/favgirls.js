import React from "react";
import { useStore } from "../store-hooks/store";
import Modeladvertorial from "../Cards/modeladvertorial";


const Favgirls = () =>{
const originstate = useStore()[0];
console.log(originstate)
const secstate = Array.from(originstate.postings);
const state=secstate.filter(el => el.isFav===true);

console.log(Array.from(state));
if(state.length<=0){return<div>Noch keine Favoriten gesetzt</div>}
    return (
      <div>
        {state.map((girl) => (
          <Modeladvertorial
            name={girl.pseudo}
            image={girl.profilepic}
            age={girl.age}
            numberofitems={girl.posts.length}
            key={girl.pseudo}
            isFav={girl.isFav}
            id={girl.id}
          />
        ))}
      </div>
    );
};

export default Favgirls;