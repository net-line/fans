import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/testcontext";
import useMyHttp from "../../hooks/myhttp";
import PostCard from "../Cards/postCard";
import classes from "./timelineofuser.module.css";

const TimeLineOfUser = (props) => {
  const authCtx = useContext(AuthContext);

  const { isLoading, data, error, sendRequest } = useMyHttp();
  function fetchmyTimeline() {
    sendRequest(
      `https://api.deine.fans/api/timeline/user/${authCtx.userID}?authToken=${authCtx.token}&role=user&roleID=${authCtx.userID}`,
      "GET"
    );
  }

  useEffect(() => {
    fetchmyTimeline();
  }, []);
  return (
    <div>
      <h3 className={classes.head}>Die neuesten Posts Deiner abonierten Channels</h3>
      {isLoading && <h3>LadeDaten</h3>}
      {!isLoading && data && data.posts && (
        <div>
          <ul className={classes.timelist}>
            {data.posts.map((post) => (
              <div key={post.guid}>
                <PostCard
                  key={post.creationTime}
                  thepost={post}
                  authToken={authCtx.token}
                  producerId={props.girlid}
                  girl={data.posts.pseudo}
                />
                {console.log("timelineofuser",data)}
              </div>
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

export default TimeLineOfUser;
