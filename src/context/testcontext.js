import React, {useState} from "react";

export const PostingContext = React.createContext({
  postings: [],
});

export default props =>{

    const [posting, setPostings] = useState([
      {
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
    ]);
    return (
      <PostingContext.Provider value={{ posting: posting }}>
        {props.children}
      </PostingContext.Provider>
    );
};