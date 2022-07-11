import React from "react";
import {useParams} from "react-router-dom";
import Modeladvertorial from "../components/Cards/modeladvertorial";
import Allpostes from "../components/lists/allposts";
import { useStore } from "../components/store-hooks/store";

const Detailsite=(props)=>{

const params = useParams();
const mygirl =params.girlId

const girls=useStore()[0];

const db = Array.from(girls.postings);
const girl = db.find(el => el.pseudo===mygirl)


    return (
      <div>
        {!girl && <h1>No data</h1>}
        {girl && (
          <div>
            <Modeladvertorial
              name={girl.pseudo}
              image={girl.profilepic}
              age={girl.age}
              numberofitems={girl.posts.length}
              key={girl.pseudo}
              isFav={girl.isFav}
              id={girl.id}
              mymotto={girl.mymotto}
            />

            <Allpostes girl={girl} />
          </div>
        )}
      </div>
    );
};

export default Detailsite;