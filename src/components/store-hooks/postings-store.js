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
          id: "1962125312",
          isFav: false,
          pseudo: "Surfergirl",

          mymotto: "Ab in den Pool!",
          age: 21,
          profilepic:
            "https://image.shutterstock.com/z/stock-photo-girl-squats-on-wall-with-a-surfboard-558028459.jpg",
          secondarypic:
            "https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-600w-2018571389.jpg",
          posts: [
            {
              title: "Da waren wa am Strand",
              content: "Hier toller Text",
              image:
                "https://image.shutterstock.com/image-photo/beautiful-latin-woman-blue-bikini-600w-1062047588.jpg",
            },
            {
              title: "Ich beim Chatten",
              content: "War ein echt tolles Gespräch",
              image:
                "https://image.shutterstock.com/image-photo/beautiful-latin-woman-hearing-sound-600w-2126926472.jpg",
            },
            {
              title: "Lecker",
              content: "Irre geiler text",
              image:
                "https://image.shutterstock.com/image-photo/young-woman-eating-fruit-on-600w-701960245.jpg",
            },
          ],
        },
        {
          id: "387678686788",
          isFav: false,
          pseudo: "Bäckergirl",
          mymotto: "Ich backe am liebsten nackt!",
          age: 25,
          profilepic:
            "https://image.shutterstock.com/image-photo/young-fun-smiling-happy-housewife-600w-2012396270.jpg",
          secondarypic:
            "https://image.shutterstock.com/image-photo/portrait-beautiful-african-woman-smiling-600w-2085055810.jpg",
          posts: [
            {
              title: "Vernasch mich",
              content: "Ich hab mich vollgekleckert",
              image:
                "https://image.shutterstock.com/image-photo/young-sexy-girl-homemade-apron-600w-2119329554.jpg",
            },
          ],
        },
        {
          id: "387678686789",
          isFav: true,
          pseudo: "Hassenichgesehen",
          mymotto: "Ich bin die Tollste",
          age: 30,
          profilepic:
            "https://image.shutterstock.com/image-photo/bored-little-girl-frightened-child-600w-1363228364.jpg",
          secondarypic:
            "https://image.shutterstock.com/image-photo/close-portrait-happy-young-north-600w-1647959941.jpg",
          posts: [
            {
              title: "Hamwa verstecken gespielt",
              content: "Und Du hast mich nicht gefunden",
              image:
                "https://image.shutterstock.com/image-photo/young-serious-woman-blue-tshirt-600w-152020187.jpg",
            },
          ],
        },
      ],
    });
};

export default configureStore;