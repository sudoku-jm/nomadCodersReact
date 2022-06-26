import { async } from "@firebase/util";
import { dbService } from "fBase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

/* 
nweetObj : 트윗 정보
isOwner : 작성자 정보
*/
const Nweet = ({ nweetObj, isOwner }) => {
  //삭제, 업데이트할 트윗지정
  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`); //수정 할 오브젝트 아이디 전달

  const [editing, setEditing] = useState(false); //트윗 업데이트입력란 토글
  const [newNweet, setNewNweet] = useState(nweetObj.text); //input에 입력된 text업데이트

  //트윗 삭제
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    // console.log("ok?", ok);
    if (ok) {
      await deleteDoc(NweetTextRef);
    }
  };

  //트윗 업데이트란 토글
  const toggleEditing = () => {
    setEditing((prev) => !prev); //이전값을 가져와서 토글
  };
  //트윗 업데이트 전송
  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log("nweetObj : ", nweetObj, "newNweet : ", newNweet);
    await updateDoc(NweetTextRef, {
      text: newNweet,
    });

    setEditing(false);
  };
  //트윗 업데이트 텍스트 변경
  const onChange = (event) => {
    const { name, value } = event.target;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        isOwner && (
          <>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="edite your nweet"
                value={newNweet}
                onChange={onChange}
                required
              />
              <input type="submit" value="Update Nweet!" />
            </form>
            <button onClick={toggleEditing}>Cancel</button>
          </>
        )
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && ( //자신이 쓴 글에만 버튼이 보이게 함
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
