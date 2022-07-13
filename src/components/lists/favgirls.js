import React from "react";
import { useStore } from "../store-hooks/store";
//import Modeladvertorial from "../Cards/modeladvertorial";


const Favgirls = () =>{
const originstate = useStore()[0];
const secstate = Array.from(originstate.postings);
const state=secstate.filter(el => el.isFav===true);

console.log(Array.from(state));
if(state.length<=0){return<div>Noch keine Favoriten gesetzt</div>}
    return (
      <div>
        <h1>Hier Favoritenliste</h1>
      </div>
    );
};

export default Favgirls;