import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {margin:0px; padding:0px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box}
    html,body {height:100%;}
    html,body {
        font-size:16px;
        -webkit-overflow-scrolling: touch;
        overflow-x:hidden;
        color:#202020;
        &::-webkit-scrollbar {
            width: 8px;  /* 세로축 스크롤바 길이 */
            height: 8px;  /* 가로축 스크롤바 길이 */
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #555;
        }   
        &::-webkit-scrollbar-track {
            background-color:#999;
        }
        font-family: 'Noto Sans KR', sans-serif;
    }

    body {
        font-weight:400;
        background-color:#0d1117;
        -webkit-text-size-adjust: none;
    }
    img { max-width:100%; max-height:100%;}
    a {text-decoration:none; color:inherit; }
    button{border:0;background:transparent;}
`;

export default GlobalStyle;
