import React from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      {/* 사용자 로그인 시 네비게이션 노출 */}
      {isLoggedIn && <Navigation />}
      <Routes>
        {/* 사용자가 로그인 되어있다면? */}
        {/* {isLoggedIn ? show home : show login page} */}

        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
