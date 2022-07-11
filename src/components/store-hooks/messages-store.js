import { initStore } from "./store";

const configureStore = (props) => {
  
     function fetchData() {
       const dataFetch = async () => {
         try {
          const response = await fetch(
            `https://api.deine.fans/api/timeline?producerID=${props.id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const data = await response.json();
          return data.data;
         } catch (err) {
           console.error("[FETCH] Error", err);
         }
       };
       return dataFetch();
     }
  
  
    const actions = {
      FETCH_DATA: async () => {
        const newData = await fetchData();
        return { message: newData };
      },
    };

  initStore(actions, { message: [] });
};

export default configureStore;
