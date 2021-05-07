import React from "react";
import styled from "styled-components";

export const PromoContainer = () => {
  return (
    <PromoSlideContainer>
      <TitlePage> АКЦИИ И ПРЕДЛОЖЕНИЯ</TitlePage>
      <Promos>
        <Promo>
          <Image></Image>
          <Title>Скидки за публикацию в Instagram</Title>
          <Text>
            Выложите в Instagram публикацию или сторис с отметкой нашего
            аккаунта @cafe_muffin_kaluga и получите единоразовую скидку 5%
          </Text>
        </Promo>

        <Promo>
          <Image></Image>
          <Title>Карта постоянного клиента</Title>
          <Text>
            Каждое воскресенье отличное предложение! Салат, горячее и десерт за
            795р. Меню обновляется каждую неделю, приходите и пробуйте!
          </Text>
        </Promo>
        <Promo>
          <Image></Image>
          <Title>Меню от шефа по специальной цене</Title>
          <Text>
            Каждое воскресенье отличное предложение! Салат, горячее и десерт за
            795р. Меню обновляется каждую неделю, приходите и пробуйте!
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
  margin: 200px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 475px;
  height: 485px;

  background: gold;
`;
const Image = styled.img`
  border-radius: 50%;
`;
const Title = styled.div``;
const Text = styled.div``;
const TitlePage = styled.div`
  margin-top: 10px;

  font-style: normal;
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-size: 144px;
`;
const Promos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
