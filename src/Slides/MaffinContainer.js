import React from "react";
import styled from "styled-components";
import maf from "../images/maf.jpg";
import bananaVafles from "../images/banana_vafles.jpg";

export const MaffinContainer = () => {
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
            <MenuButton>МЕНЮ</MenuButton>
          </MenuNav>
        </Menu>
      </LeftPart>
      <RightPart>
        <Star>
          <svg
            fill="white"
            width="110px"
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
  width: 1400px;
`;
const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: (100% - 1400px);
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MafLogoImg = styled.img`
  margin-top: 6px;
  height: 725px;
  width: 1400px;
`;
const Text = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 105px;
  transform: translate(50px, 175px);
`;
const TopText = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 200px;
  margin-top: -80px;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
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
`;
const Star = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 15px;
  height: 325px;
`;
const BananaVafelsImg = styled.img`
  width: 503px;
  height: 600px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin-left: 64px;
  font-size: 47px;
  margin-top: 10px;
`;
const MenuText = styled.div`
  font-family: Alieron Regular;
  font-family: system-ui;
`;
const MenuButton = styled.button`
  width: 150px;
  height: 64px;
  margin-right: 20px;
  border-radius: 20px;
  color: black;
  outline: none;
  border: 0;
  box-shadow: 0 20px 32px 0 rgb(49 49 49 / 20%) inset;
  border-style: solid none;
  font-size: 36px;
  font-family: Open Sans Light, serif;
`;
const MenuNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
