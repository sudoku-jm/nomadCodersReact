import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap');
  /* 초기화 스타일 */
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        font-size:15px;
    }
    a{
        color: #000;text-decoration:none;
    }
`;

export default GlobalStyle;
