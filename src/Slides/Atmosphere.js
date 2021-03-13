import React from "react";
import styled from "styled-components";
import maf2 from "../images/maf2.jpg";
import stylya from "../images/stylya.jpg";
import s3 from "../images/s3.jpg";

export const Atmosphere = () => {
  return (
    <Container>
      <Header>
        <Title> УЮТНАЯ АТМОСФЕРА</Title>
        <UnderTitleText> Инфа о маффине </UnderTitleText>
      </Header>
      <Images>
        <ImgSide width="500px" height="330px" src={maf2} />
        <ImgCenter src={stylya} />
        <ImgSide src={s3} />
      </Images>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 268px;
`;
const Title = styled.div`
  margin-top: 10px;

  font-style: normal;
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  font-size: 144px;
`;
const UnderTitleText = styled.div`
  font-size: 40px;
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  margin-top: 20px;
`;
const Images = styled.div`
  margin-top: 50px;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const ImgCenter = styled.img`
  width: 650px;
`;
const ImgSide = styled.img`
  width: 500px;
  height: 330px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 25px;
`;
