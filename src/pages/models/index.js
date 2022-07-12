import React from "react";
import Allgirls from "../../components/lists/allgirls";
import { useStore } from "../../components/store-hooks/store";
import AllApiGirls from "../../components/lists/allapigirls";





const Models=()=>{
    const message = useStore(1234)[1]
    console.log(message);
return (
  <div>
    <h1>Unsere Girls</h1>
    <AllApiGirls />
    <Allgirls />
  </div>
);
};

export default Models;