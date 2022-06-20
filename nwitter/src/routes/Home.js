import { dbService } from "fBase";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
/* 트윗을 할 페이지 */
const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  const getNweets = () => {
    const nweets = dbService.collection("nweets").get();
    console.log(nweets);
  };

  useEffect(() => {
    dbService.collection("nweets").get();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      //promise를 리턴하니 async awaite를 써준다.
      const docRef = await addDoc(collection(dbService, "nweets"), {
        nweet,
        createdAt: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
          value={nweet}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};

export default Home;
