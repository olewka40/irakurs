import React from "react";
import styled from "styled-components";
import sheff from "../images/shef.png";

export const SheffContainer = () => {
  return (
    <CookerInfo>
      <Gallery>
        <Img src={sheff} alt="sheff" />
      </Gallery>
      <Info>Инфа о шефе</Info>
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
const Gallery = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 64px;

  background-color: #ff8c00;
  width: 50%;
  height: 100%;
`;
