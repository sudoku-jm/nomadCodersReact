import React from "react";
import { authService } from "fBase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  //react-router-dom v6 부터 url이동방법
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/"); // 로그아웃 시 home화면 이동
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
