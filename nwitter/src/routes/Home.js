import Nweet from "components/Nweet";
import { dbService } from "fBase";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

/* 트윗을 할 페이지 */
const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]); //보낸 트윗들을 가져옴 getting the nweets
  const [nweet, setNweet] = useState(""); //트윗 텍스트가 담김 setting the nweet

  useEffect(() => {
    // 실시간으로 데이터를 데이터베이스에서 가져오기
    const q = query(
      collection(getFirestore(), "nweets"),
      orderBy("createdAt", "desc") //작성 날짜별 정렬
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArray = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setNweets(newArray);
      // console.log("Current nweets in CA: ", newArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("nweets??", nweets);

  //트윗 전송
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      //promise를 리턴하니 async awaite를 써준다.
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      // console.error("Error adding document: ", error);
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

      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet} /* 트윗 데이터 */
            isOwner={nweet.creatorId === userObj.uid} /* 작성자 정보 */
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
