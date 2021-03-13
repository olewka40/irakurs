import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import sheff from "../images/shef.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

export const SheffContainer = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const handleChangeIndexPlus = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };
  const handleChangeIndexMinus = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((index) => index - 1);
    }
  };
  return (
    <CookerInfo>
      <Gallery>
        <StyledSwipeableViews mouseEvents={true} index={index}>
          {[1, 2, 3].map((e) => (
            <BlockGallery>
              <IconButtonBack onClick={handleChangeIndexMinus}>
                <ChevronLeftIcon />
              </IconButtonBack>
              <Img src={sheff} alt="sheff" />
              <IconButtonNext onClick={handleChangeIndexPlus}>
                <ChevronRightIcon />
              </IconButtonNext>
            </BlockGallery>
          ))}
        </StyledSwipeableViews>
      </Gallery>
      <Info>Инфа о шефе</Info>
    </CookerInfo>
  );
};

const CookerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1420px;
  height: 665px;
`;
const Gallery = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;
const BlockGallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const IconButtonBack = styled(IconButton)``;
const IconButtonNext = styled(IconButton)``;
const StyledSwipeableViews = styled(SwipeableViews)`
  display: flex;
  flex-direction: row;
  align-items: center;
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
