import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  :root {
    --white: #fff;
    --black: #000;
    --gray-200: #f0f0f5 ;
    --red: #DE2041 ;
  }


  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font: 400 14px Roboto, sans-serif;
    background: var(--gray-200);
    -webkit-font-smoothing: antialiased;
    transition: color, background 1s ease 0s, transform 1s ease 0s;
    color: var(--black);
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: var(--black) ;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    resize: none;
    color: var(--black);
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }
`