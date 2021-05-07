import React from "react";
import styled from "styled-components";
import sheff from "../images/shef.png";

export const SheffContainer = () => {
  return (
    <CookerInfo>
      <Gallery>
        <Img src={sheff} alt="sheff" />
      </Gallery>
      <Info>
        <TitleInfo>Шеф - повар <br/>Джон Вандербоорен</TitleInfo>
        <TextInfo>
            "Моя преданность кулинарии, отличной еде и блюдам живет в моей крови, всегда в моих мыслях. И вовсе неважно, будет ли это для королей или друзей и семьи. И все гости - постоянные, случайные, местные и приезжие - всегда радуют меня!"
        </TextInfo>
      </Info>
    </CookerInfo>
  );
};

const CookerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54%;
  height: 54%;
`;
const TextInfo = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 30px;
  padding: 20px;

  @media (max-width: 1920px) {
    font-size: 25px;
  }
`;
const Gallery = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleInfo = styled.div`
  margin-top: 20px;
font-size: 35px;
text-align:center;
  margin-bottom: 20px;

`;

const Info = styled.div`
  font-family: Alieron Regular;
  font-family: system-ui;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  font-size: 64px;

  background-color: #ff8c00;
  width: 50%;
  height: 100%;
`;
