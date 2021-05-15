import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SheffContainer } from "./Slides/Sheff";
import { MaffinContainer } from "./Slides/MaffinContainer";
import { Atmosphere } from "./Slides/Atmosphere";
import { ContactsSlide } from "./Slides/Contacts";
import { MenuList } from "./MenuList/MenuList";
import { PromoContainer } from "./Slides/PromoContainer";
import { CoffeeSlide } from "./Slides/CoffeeContainer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #root{
    height: 100%;
  }`;

const App = () => {
  return (
    <Router>
      <MainContainer>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,711;1,100;1,200;1,300;1,400;1,500;1,600;1,900&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Block id="main">
              <MaffinContainer />
            </Block>
            <Block id="promoes">
              <PromoContainer />
            </Block>
            <Block id="sheff">
              <SheffContainer />
            </Block>
            <Block id="atmosphere">
              <Atmosphere />
            </Block>
            <Block id="coffee">
              <CoffeeSlide />
            </Block>
            {/*<Block id="contacts">*/}
            {/*  <ContactsSlide />*/}
            {/*</Block>*/}
          </Route>
          <Route path="/menu">
            <MenuList />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  #main {
    background-color: #ff8c00;
    display: flex;
    flex-direction: row;
  }

  #sheff {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0dbda3;
  }

  #atmosphere {
    background-color: white;
  }
  #promoes {
    background-color: white;
  }

  #contacts {
    background-color: #ff8c00;
  }
  #contacts {
  }
`;
const Block = styled.div`
  position: relative;
  width: 100%;
  // 100 vh  а не проценты потому что тебе нужно чтобы каждый блок , а у тиебя их 4 штуки были во всю высоту экрана, независимо ни от чего, vh = view height то есть видимая выстоа, то шо ты видишь кароче , и поэтому их 4

  height: 100vh;
`;
