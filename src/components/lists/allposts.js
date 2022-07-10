import Modelcard from "../Cards/modelcard";
import React from "react";
//import { useStore } from "../store-hooks/store";

const Allpostes=(props)=>{
//const state = useStore()[0];
    return (
      <div>
       {props.girl.posts.map((girl) => (
        <Modelcard name={props.girl.pseudo} 
        title={girl.title}
        key={girl.title}
        image={girl.image}
        content={girl.content}
        />
       ))}
    
      </div>
    );
};

export default Allpostes;