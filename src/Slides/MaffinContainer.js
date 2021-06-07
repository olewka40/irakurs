import React from "react";
import styled from "styled-components";
import maf from "../images/maf.jpg";
import bananaVafles from "../images/banana_vafles.jpg";

import { useHistory } from "react-router";
import { ReserveModal } from "../ReserveModal";

export const MaffinContainer = () => {
  const history = useHistory();

  const toMenu = () => {
    history.push("/menu");
  };
  return (
    <>
      <LeftPart>
        <LogoContainer>
          <MafLogoImg src={maf} />
          <Text>
            <TopText>
              <div>Кафе</div>
              <div>МАФФИН</div>
            </TopText>

            <BotText>Ежедневно с 9:00 до 23:00</BotText>
          </Text>
        </LogoContainer>
        <Menu>
          <MenuText>
            Вкуснейшие десерты
            <br />
            Свежесваренный кофе
            <br />
            Бизнес-ланчи
          </MenuText>
          <MenuNav>
            <MenuButton onClick={toMenu}>Меню</MenuButton>
            <ReserveModal />
          </MenuNav>
        </Menu>
      </LeftPart>
      <RightPart>
        <Star>
          <svg
            fill="white"
            x="0px"
            y="0px"
            viewBox="0 0 500 500.008"
            enableBackground="new 0 0 500 500.008"
            role="img"
            aria-label="Orange Star"
          >
            <g id="__id15_skijbwbwsb">
              <path d="M250,0c0,138.072-111.936,250-250,250c138.071,0,250,111.935,250,250.008C250,361.933,361.931,250,500,250   C361.931,250,250,138.073,250,0z" />
            </g>
          </svg>
        </Star>
        <BananaVafelsImg src={bananaVafles} />
      </RightPart>
    </>
  );
};
const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 72.5%;
`;
const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 27.5%;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MafLogoImg = styled.img`
  margin-top: 0.351%;
  height: 94.5%;
  max-width: 100%;
`;
const Text = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 105px;
  transform: translate(5%, 43%);
`;
const TopText = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 200px;
  margin-top: -8.3%;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  @media (min-width: 2000px) {
    font-size: 250px;
  }
  @media (max-width: 1500px) {
    font-size: 133px;
    line-height: 227px;
  }

  // это селектор называется (:) типа ты говоришь последнему элементу который находится тут что он должен на 100 подняться
  div:last-child {
    margin-top: -100px;
  }
`;
const BotText = styled.div`
  font-weight: 400;
  font-style: normal;
  font-family: Roboto Condensed, sans-serif;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 48px;
  margin-left: 10px;
  @media (min-width: 2000px) {
    font-size: 85px;
  }
  @media (max-width: 1500px) {
    font-size: 38px;
  }
`;
const Star = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 40%;
  margin-top: 5%;
  margin-right: 2%;
  > svg {
    width: 30%;
    @media (min-width: 2000px) {
      width: 40%;
    }
  }
`;
const BananaVafelsImg = styled.img`
  width: 100%;
  //height: 600px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin-left: 64px;

  margin-top: -25px;
  height: 95%;
  @media (max-width: 1500px) {
    height: 23%;
  }
`;
const MenuText = styled.div`
  font-size: 42px;
  text-align: left;
  line-height: 57px;
  font-family: Alieron Regular;
  font-family: system-ui;
  @media (min-width: 2000px) {
    font-size: 83px;
    line-height: 100px;
    width: 55%;
  }
  @media (max-width: 1500px) {
    font-size: 36px;
    line-height: 56px;
  }
`;
const MenuButton = styled.div`
  color: white;
  outline: none;
  border: 0;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  border-style: solid none;
  font-size: 36px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 2000px) {
    font-size: 64px;
    text-decoration: none;
  }
  @media (max-width: 1500px) {
    font-size: 28px;
    text-decoration: none;

    margin-bottom: 0;
  }
`;

const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: none;
`;
