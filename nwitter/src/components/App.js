import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

const App = () => {
  // console.log(authService.currentUser)
  const [init, setInit] = useState(false);
  //isLoggedIn : 기본값 false , 로그인 상태 true , false
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //유저가 로그인 되어있는지 여부를 판단. 여기서는 실제 로그인 되었는지 로그아웃 한건지 잘 모름. 로그아웃했다고 알 수 도 있음. 그 이유는 firebase가 아직 시작되지도 않았기 때문이다.
  // console.log("first", authService.currentUser); //null

  // setInterval(() => {
  //   console.log("check!!", authService.currentUser); //유저정보 뜸
  // }, 2000);

  const [userObj, setUserObj] = useState(null); //유저 정보를 담아줌

  useEffect(() => {
    //페이지 진입 시 onAuthStateChanged함수를 통해 유저가
    //실제 로그인이 되었는지 안 되었는지 알 수 있다.
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user); //user정보 저장
      } else {
        setUserObj(null);
      }
      setInit(true); // 라우터 노출 여부 항상 true 상태.
    });
  }, []);

  return (
    <>
      {/* init이 false가 되면 router를 숨길 것이다. */}
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}

      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
};

export default App;
