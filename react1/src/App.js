import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      {/* <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

/* 
영화 API 
https://yts.mx/api

https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

npm install react-router-dom

리액트 라우터 
npm i react-router-dom@5.3.0


Router : 렌더링을 먼저 해주고, 유저에게 보여주고 싶은 것이 들어간다.
           유저가 있는 URL에 따라!
Switch : 한 번에 하나의 Route만 렌더링 하기 위해

*/

/* 

npm i gh-pages

결과물을 깃헙에 업로드 해주는 무료 서비스.


빌드
npm run build
*/
