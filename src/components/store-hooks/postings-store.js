import { initStore } from "./store";

const configureStore = () =>{
    const actions = {
        TOGGLE_FAV: (curState, postingsId) => {
            const girlIndex=curState.postings.findIndex(p => p.id === postingsId)
            const newFavStatus = !curState.postings[girlIndex].isFav;
            const updatedList = [...curState.postings];
            updatedList[girlIndex] = {
              ...curState.postings[girlIndex],
              isFav: newFavStatus,
            };
            return { postings: updatedList };
        }
    }
    initStore(actions, {
      postings: [
        {
          id: 387678686787,
          isFav: false,
          pseudo: "Surfergirl",
          age: 21,
          profilepic:
            "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
          posts: [
            {
              title: "testnachricht 1",
              content: "Hier toller Text",
              image:
                "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
            },
            {
              title: "testnachricht 2",
              content: "HWahnsinnstext",
              image:
                "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
            },
            {
              title: "testnachricht 3",
              content: "Irre geiler text",
              image:
                "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
            },
          ],
        },
        {
          id: 387678686788,
          isFav: false,
          pseudo: "Bäckergirl",
          age: 21,
          profilepic:
            "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
          posts: [
            {
              title: "testnachricht",
              content: "Hier toller Text",
              image:
                "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
            },
          ],
        },
        {
          id: 387678686789,
          isFav: true,
          pseudo: "Hassenichgesehen",
          age: 21,
          profilepic:
            "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
          posts: [
            {
              title: "testnachricht",
              content: "Hier toller Text",
              image:
                "https://image.shutterstock.com/image-photo/pretty-young-slim-woman-on-600w-384107347.jpg",
            },
          ],
        },
      ],
    });
};

export default configureStore;