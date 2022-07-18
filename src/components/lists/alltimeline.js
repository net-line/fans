import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/testcontext";
import useMyHttp from "../../hooks/myhttp";

const AllTimeLine=(props)=>{
const authCtx=useContext(AuthContext)


const { isLoading, data, error, sendRequest } = useMyHttp();
function fetchTimeline() {
  sendRequest(
    `https://api.deine.fans/api/timeline?producerID=${authCtx.userID}&role=User&authToken=${authCtx.token}`,
    "GET"
  );
}

useEffect(() => {
  fetchTimeline();
}, []);
    return (
      <div>
        <h5>Here be a timeline</h5>
        {isLoading && <h3>LadeDaten</h3>}
        {!isLoading && data && data.posts && (
          <div>
            <ul className="list-group list-group-flush border-bottom scrollarea">
              {data.posts.map((post) => (
                <div>
                  <h5>{post.creationTime}</h5>
                </div>
              ))}
            </ul>
          </div>
        )}
        {error &&<h5>Irgendwas passt noch nicht</h5>}
      
        {data && data.error && <h5>{data.error}</h5>}
      </div>
    );
};

export default AllTimeLine;