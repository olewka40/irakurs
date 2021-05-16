import React from "react";
import styled from "styled-components";
import { FirstSlide } from "./Slide1";
import { SecondSlide } from "./Slide2";
import { ThirdSlide } from "./Slide3";

export const MenuList = () => {
  return (
    <MenuListContainer>
      <Slide>
        <FirstSlide />
      </Slide>
      <Slide>
        <SecondSlide />
      </Slide>
      <Slide>
        <ThirdSlide />
      </Slide>
    </MenuListContainer>
  );
};

const MenuListContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
const Slide = styled.div`
  position: relative;
  width: 100%;

  height: 100vh;
`;
