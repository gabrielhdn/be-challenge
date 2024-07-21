import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray[0]};
    font-size: 16px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 16px;
  }

  input {
    outline: none;
  }
`;
