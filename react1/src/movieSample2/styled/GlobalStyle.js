import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap');
  /* 초기화 스타일 */
    *{
        box-sizing: border-box;
        outline : 0;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: #eff3f7;
        height: 100%;
    }
    a{
        color: #000;text-decoration:none;
    }
`;

export default GlobalStyle;
