import React from "react";
import Allgirls from "../../components/lists/allgirls";
import { useStore } from "../../components/store-hooks/store";





const Models=()=>{
    const message = useStore(1234)[1]
    console.log(message);
return(

    <div>
        <h1>Unsere Girls</h1>
        <Allgirls />
    
    </div>
)
};

export default Models;