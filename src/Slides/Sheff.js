import React from "react";
import styled from "styled-components";
import sheff from "../images/shef.png";
import sheff1 from "../images/shef1.jpg";

export const SheffContainer = () => {
  return (
    <CookerInfo>
      <Title>
        ШЕФ-ПОВАР <br />
        ДЖОН ВАНДЕРБООРЕН
      </Title>
      <Content>
        <Pictures>
          <FirstImg src={sheff} />
          <SecondImg src={sheff1} />
        </Pictures>
        <Text>
          Моя команда и я хотели бы предложить вам гастрономический результат
          полученного опыта и моей прошедшей карьере - 35 лет работы шеф-поваром
          на 5 континентах.
          <br />
          За всё время моей карьеры я готовил для таких людей как президент
          Клинтон, Майкл Джексон, Роберт Де Ниро, Эдди Мерфи, королевская семья
          Англии, а после переезда в Россию регулярно готовил для Бориса
          Ельцина. Все мои знания и умения мы воплощаем в кафе "Маффин".
          <br />
          <CentredText>
            Моя преданность кулинарии, отличной еде и блюдам живёт в моей крови,
            всегда в моих мыслях. И вовсе не важно, будет ли это для королей или
            друзей и семьи. И все гости - постоянные, случайные, местные и
            приезжие - всегда радуют меня!
          </CentredText>
          <Citata>With love, Chef John Vanderbooren</Citata>
        </Text>
      </Content>
    </CookerInfo>
  );
};

const CookerInfo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Title = styled.div`
  font-size: 70px;
  text-align: center;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  margin: 0 0 0 180px;
  color: white;
  @media (min-width: 2000px) {
    font-size: 100px;
  }
  @media (max-width: 1500px) {
    font-size: 50px;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const Pictures = styled.div`
  width: 50%;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 50%;
  height: 100%;
  font-size: 28px;
  color: white;

  line-height: 50px;
  padding-right: 39px;
  box-sizing: border-box;

  font-family: Raleway Heavy, sans-serif;
  @media (min-width: 2000px) {
    font-size: 41px;
    line-height: 70px;
  }
  @media (max-width: 1500px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
const CentredText = styled.div`
  text-align: center;
  margin-left: 60px;
  margin-top: 20px;
  box-sizing: border-box;
  width: 96%;
`;
const Citata = styled.div`
  color: black;
  width: 100%;
  text-align: right;
`;

const FirstImg = styled.img`
  position: absolute;

  width: 550px;
  height: 550px;
  top: 50px;
  left: 50px;
  @media (min-width: 2000px) {
    width: 700px;
    height: 700px;
    top: 75px;
    left: 75px;
  }
  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
    top: 50px;
    left: 50px;
  }
`;
const SecondImg = styled.img`
  position: absolute;
  width: 480px;
  height: 480px;
  top: 450px;
  left: 450px;
  @media (min-width: 2000px) {
    width: 750px;
    height: 750px;
  }
  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
    top: 250px;
    left: 250px;
  }
`;
