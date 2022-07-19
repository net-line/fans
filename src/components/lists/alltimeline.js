import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/testcontext";
import useMyHttp from "../../hooks/myhttp";
import PostCard from "../Cards/postCard";
import classes from "./alltimeline.module.css";

const AllTimeLine=(props)=>{
const authCtx=useContext(AuthContext)


const { isLoading, data, error, sendRequest } = useMyHttp();
function fetchTimeline() {
  sendRequest(
    `https://api.deine.fans/api/timeline/producer/${props.girlid}?authToken=${authCtx.token}&role=user&roleID=${authCtx.userID}`,
    "GET"
  );
}




useEffect(() => {
  fetchTimeline();
}, []);
    return (
      <div className={classes.list}>
        <h5>Here be a timeline</h5>
        {isLoading && <h3>LadeDaten</h3>}
        {!isLoading && data && data.posts && (
          <div>
            <ul className={classes.list}>
              {data.posts.map((post) => (
                <li key={post.creationTime}>
                  <PostCard
                    girl={props.girl}
                    key={post.creationTime}
                    thepost={post}
                    authToken={authCtx.token}
                    producerId={props.girlid}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {error && <h5>Irgendwas passt noch nicht</h5>}

        {data && data.error && (
          <div>
            <h5>{data.error}</h5>
          </div>
        )}
      </div>
    );
};

export default AllTimeLine;