import React, { useState } from "react";
import styled from "styled-components";
import maf2 from "../images/maf2.jpg";
import stylya from "../images/stylya.jpg";
import s3 from "../images/s3.jpg";
import SwipeableViews from "react-swipeable-views";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const imagesArray = [
  {
    id: 0,
    name: "$to to tut",
    source: maf2,
  },
  {
    id: 1,
    name: "$to to tut1",
    source: stylya,
  },
  {
    id: 2,
    name: "$to to tut2",
    source: s3,
  },
];

export const Atmosphere = () => {
  const [indexImage, setIndexImage] = useState(1);

  const nextImage = () => {
    if (indexImage === imagesArray.length - 1) {
      setIndexImage(0);
    } else {
      setIndexImage(indexImage + 1);
    }
  };
  const backImage = () => {
    if (indexImage === 0) {
      setIndexImage(imagesArray.length - 1);
    } else {
      setIndexImage(indexImage - 1);
    }
  };
  console.log(indexImage);
  return (
    <Container>
      <Header>
        <Title> УЮТНАЯ АТМОСФЕРА</Title>
        <UnderTitleText> Инфа о маффине </UnderTitleText>
      </Header>
      <Gallery>
        <StyledSwipeableViews index={indexImage} enableMouseEvents>
          {imagesArray.map((e) => (
            <>
              <IconButton onClick={backImage}>
                <ArrowBackIosIcon />
              </IconButton>
              <ImgCenter src={e.source} alt="galleryImage" />
              <IconButton onClick={nextImage}>
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          ))}
        </StyledSwipeableViews>
      </Gallery>
      <Images></Images>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const ImgCenter = styled.img`
  width: 40%;
  border-radius: 8px;
`;
const ImgSide = styled.img`
  width: 650px;
  height: 330px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 25px;
`;
const Gallery = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSwipeableViews = styled(SwipeableViews)`
  > div > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
