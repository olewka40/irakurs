import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { SheffContainer } from "./Slides/Sheff";
import { MaffinContainer } from "./Slides/MaffinContainer";
import { Atmosphere } from "./Slides/Atmosphere";
import { ContactsSlide } from "./Slides/Contacts";

// import s3 from "./images/s3.jpg";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }`;

const App = () => {
  return (
    <MainContainer>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,711;1,100;1,200;1,300;1,400;1,500;1,600;1,900&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Block id="main">
        <MaffinContainer />
      </Block>
      <Block id="sheff">
        <SheffContainer />
      </Block>
      <Block id="atmosphere">
        <Atmosphere />
      </Block>
      <Block id="contacts">
        <ContactsSlide />
      </Block>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100%;
  #main {
    background-color: #ff8c00;
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  #sheff {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0dbda3;
    height: 100vh;
  }

  #atmosphere {
    background-color: white;
    height: 100vh;
  }

  #contacts {
    background-color: #ff8c00;
    height: 100vh;
  }
`;
const Block = styled.div``;
