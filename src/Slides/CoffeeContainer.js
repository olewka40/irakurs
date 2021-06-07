import React from "react";
import styled from "styled-components";
import krugCoffee from "./images/Screenshot_4.jpg";
export const CoffeeSlide = () => {
  return (
    <>
      <Content>
        <MainContent>
          <Orange>
            <ImgCoffee>
              <SVG viewBox="0 0 500 500">
                <path
                  d="M492.1 250.7c0-26.1 13-53.8 5-77.3-8.2-24.4-36-39.4-51.3-59.7-15.5-20.5-21.9-50.4-43.2-65.3C381.5 33.7 350 37 324.7 29 300.2 21.4 276.9.6 249.8.6c-27.1 0-50.5 20.7-74.9 28.4-25.3 7.9-56.9 4.6-78 19.4-21.3 14.9-27.7 44.8-43.2 65.3C38.3 134 10.6 149 2.3 173.4c-7.9 23.5 5 51.2 5 77.3 0 26.1-13 53.8-5 77.3 8.2 24.4 36 39.4 51.3 59.7 15.5 20.5 21.9 50.4 43.2 65.3 21.1 14.8 52.6 11.5 78 19.4 24.5 7.6 47.8 28.4 74.9 28.4 27.1 0 50.5-20.7 74.9-28.4 25.3-7.9 56.9-4.6 78-19.4 21.3-14.9 27.7-44.8 43.2-65.3 15.4-20.3 43.1-35.3 51.3-59.7 8-23.6-5-51.3-5-77.3z"
                  fill="#fff0e1"
                />
              </SVG>
              <Img src={krugCoffee} alt="kofe" />
            </ImgCoffee>
            <TextBlock>
              <Title>Кофейня на Тульской 67!</Title>
              <Text>
                Наше второе заведение - кофейня "Маффин по адресу ул.Тульская
                67. <br />
                Вас ожидает настоящий итальянский свежесваренный кофе,
                вкуснейшие десерты и приятная атмосфера домашнего уюта. По
                будням так же действуют бизнес-ланчи. <br />
                Система скидок по карте и за публикацию в Instagram😊 С
                нетерпением всех ждем в гости!❤
              </Text>
            </TextBlock>
          </Orange>
        </MainContent>
      </Content>
    </>
  );
};

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Orange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  background-color: rgba(255, 140, 0, 85%);
  opacity: 1;
  @media (min-width: 2000px) {
    width: calc(100% - 160px);
    height: calc(100% - 160px);
  }
`;
const ImgCoffee = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBlock = styled.div`
  padding-top: 50px;
  padding-right: 30px;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: Alieron Regular;
  font-family: system-ui;
  font-weight: 400;
`;
const Title = styled.div`
  text-decoration: underline;
  font-size: 64px;
  font-weight: 700;
  @media (min-width: 2000px) {
    font-size: 90px;
  }
  @media (max-width: 1500px) {
    font-size: 44px;
  }
`;
const Text = styled.div`
  margin-top: 100px;
  text-align: right;
  font-size: 32px;
  font-weight: 700;
  line-height: 65px;
  @media (min-width: 2000px) {
    font-size: 44px;
    line-height: 95px;
  }
  @media (max-width: 1500px) {
    margin-top: 70px;
    text-align: right;
    font-size: 20px;
    font-weight: 700;
    line-height: 55px;
  }
`;
const SVG = styled.svg`
  width: 700px;
  height: 700px;
  @media (max-width: 1500px) {
    width: 500px;
    height: 500px;
  }
  @media (min-width: 2330px) {
    width: 900px;
    height: 900px;
  }
`;
const Img = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 550px;
  height: 550px;
  @media (max-width: 1500px) {
    width: 420px;
    height: 420px;
  }
  @media (min-width: 2330px) {
    width: 750px;
    height: 750px;
  }
`;
