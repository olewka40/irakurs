import React from "react";
import styled from "styled-components";
import skidka from "./images/15.png";
import maf from "./images/maf.png";
import menu from "./images/menu.png";
export const PromoContainer = () => {
  return (
    <PromoSlideContainer>
      <TitlePage> АКЦИИ И ПРЕДЛОЖЕНИЯ</TitlePage>
      <Promos>
        <Promo>
          <Image src={skidka} />
          <Title>Карта постоянного клиента</Title>
          <Text>
            У нас действует система скидочных карт для постоянных гостей. <br />{" "}
            Карты выдаются при систематическом посещении кафе. Скидки начинаются
            от 5% и повышаются до 15%
          </Text>
        </Promo>

        <Promo>
          <Image src={menu} />
          <Title>Меню от шефа по специальной цене</Title>
          <Text>
            Каждое воскресенье отличное предложение! <br />
            Салат, горячее и десерт за 795р. Меню обновляется каждую неделю,
            приходите и пробуйте!
          </Text>
        </Promo>
        <Promo>
          <Image src={maf} />
          <Title>Скидки за публикацию в Instagram</Title>
          <Text>
            Выложите в Instagram публикацию или сторис с отметкой нашего
            аккаунта @cafe_muffin_kaluga и получите единоразовую скидку 5%
          </Text>
        </Promo>
      </Promos>
    </PromoSlideContainer>
  );
};
const PromoSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const Promo = styled.div`
  position: relative;
  margin: 200px 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 475px;
  height: 485px;
  background: #0dbda3;
  font-family: Raleway Heavy, sans-serif;
  font-size: 70px;
`;
const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  width: 230px;
  top: -25%;
  left: 25%;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-top: 150px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 28px;
  color: #31241eff;
  line-height: 1.3em;
  font-family: Alieron Regular;
  font-family: system-ui;
  font-weight: 400;
`;
const TitlePage = styled.div`
  margin-top: 10px;

  font-style: normal;
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-family: Alieron Regular;
  font-family: system-ui;
  font-size: 144px;
`;
const Promos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > div:nth-child(2) {
    background: #ff8c00;
  }
`;
