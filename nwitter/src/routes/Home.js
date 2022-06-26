import React, { useEffect, useRef, useState } from "react";
import Nweet from "components/Nweet";
import { dbService, storageService } from "fBase";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { v4 as uuidv4, v4 } from "uuid";
import { ref, uploadString } from "firebase/storage";

/* 트윗을 할 페이지 */
const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]); //보낸 트윗들을 가져옴 getting the nweets
  const [nweet, setNweet] = useState(""); //트윗 텍스트가 담김 setting the nweet
  const [attachment, setAttachment] = useState();
  const fileInput = useRef();

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
    //사진 먼저 업로드
    //사진 URL을 받아 URL을 nweet에 추가

    //파일에 대한 reference를 만들어주는 작업.
    const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
    const response = await uploadString(fileRef, attachment, "data_url");
    console.log(response);

    /* try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
    } catch (error) {}
    setNweet(""); */
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  //파일데이터 선택
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0]; //첫번째 파일을 가져온다.
    // console.log(theFile);
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      //파일 로딩이 끝났을 때
      // console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent; //finishedEvent.currentTarget.result
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
    fileInput.current.value = null;
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
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInput}
        />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
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
