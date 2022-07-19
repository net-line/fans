import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/testcontext";
import useMyHttp from "../../hooks/myhttp";
import PostCard from "../Cards/postCard";

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
      <h5>Here be a timeline</h5>
      {isLoading && <h3>LadeDaten</h3>}
      {!isLoading && data && data.posts && (
        <div>
          <ul className="">
            {data.posts.map((post) => (
              <div key={post.guid}>
                <PostCard
                  key={post.creationTime}
                  thepost={post}
                  authToken={authCtx.token}
                  producerId={props.girlid}
                />
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
