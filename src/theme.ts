import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#1a3b66",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${(props: any) => props.theme.body}
    }

`;
