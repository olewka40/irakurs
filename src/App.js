import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SheffContainer } from "./Slides/Sheff";
import { MaffinContainer } from "./Slides/MaffinContainer";
import { Atmosphere } from "./Slides/Atmosphere";
import { ContactsSlide } from "./Slides/Contacts";
import { MenuList } from "./MenuList/MenuList";

// то что снизу глобал стиль, это сделано для того чтобы не было ебаных отступов по 5пх в начале от всех краёв , это тема юзается в библиотеке STyled components распиши что ахуенная вещь потому что можешь применять глобальные стили на все приложение и типа это ебать как удобно

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
        {/*тут ты импортишь шрифты*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,711;1,100;1,200;1,300;1,400;1,500;1,600;1,900&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        {/*это свич который на на вср юзала помнишь наверное и роут туда же надеюсь помнишь*/}
        <Switch>
          <Route exact path="/">
            {/* тут ты айдишники блокам  даёшь чтобы сразу все застайлить и не писать много раз нихуя , ну ниже увидишь как это сделано, напиши что там делаешь потмоу что не хочешь писать говно код и правильно делать так, чтобы компоненты можно было переиспольховаться а не как в индии писать по 2к строк */}
            <Block id="main">
              {/*тута ты импорнишь каждый компонент по отдельности чтоб удобно было и глаза не бегали туда сюда потому что 2к строк кода в 1 файле это пиздец и все должно быть структурировано итд*/}
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
          </Route>
          <Route path="/menu">
            {/*тут роутинг на меню итд ,я там в мафин контейнере все расписал по меоему */}
            <MenuList />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default App;

// скажешь что юзала стайледы потому что так ебать понятнее и прозще код читать, ну по крайней мере тем кто за инглиш шарит, ну я думаю ты и сама видишь и понимаешь что лучше чем тупо 100 дивок и прочей хуеты
// свойства повторяются зща частую но я думаю если что загуглишь там сложного ничегт нет по названиям все понятно
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

  #contacts {
    background-color: #ff8c00;
  }
`;
const Block = styled.div`
  width: 100%;
  // 100 vh  а не проценты потому что тебе нужно чтобы каждый блок , а у тиебя их 4 штуки были во всю высоту экрана, независимо ни от чего, vh = view height то есть видимая выстоа, то шо ты видишь кароче , и поэтому их 4

  height: 100vh;
`;
