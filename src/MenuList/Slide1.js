import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/1.jpg";
import img2 from "./imagesMenu/12.jpg";
import img3 from "./imagesMenu/1.jpg";
const itemsarray = {
  salats: [
    { name: "Капрезе", price: "360" },
    { name: "Нисуаз", price: "360" },
    { name: "Цезарь с курицей", price: "370" },
    { name: "Азиатский салат", price: "420" },
    { name: "Корпаччо из говядины", price: "520" },
    { name: "Микс закусок от шефа", price: "360" },
    { name: "Сырное ассорти", price: "580" },
    { name: "Сельдь с гарниром", price: "250" },
  ],
  soups: [
    { name: "Борщ со сметаной", price: "260" },
    { name: "Французский луковый суп", price: "245" },
    { name: "Бульябес", price: "365" },
    { name: "Швейцарский сырный суп", price: "280" },
    { name: "Грибной суп", price: "280" },
    { name: "Солянка", price: "300" },
  ],
  pizzes: [
    {
      name: "Основа на выбор - томатная паста/мягкий творожный сыр",
      price: "",
    },
    { name: "Традиционная французская", price: "295" },
    { name: "Итальянская", price: "295" },
    { name: "Гавайская", price: "295" },
    { name: "Вегатерианская", price: "295" },
    { name: "Морская", price: "395" },
    { name: '"Де-люкс"', price: "595" },
    { name: '"Болоньезе"', price: "355" },
  ],
  pasteRizzoto: [
    { name: "Арабьятта", price: "280" },
    { name: "Тагиалини-цитрус", price: "260" },
    { name: "Карбонара", price: "310" },
    { name: "Болоньезе", price: "310" },
    { name: "Сливочный ризотто", price: "360" },
    { name: 'Лазанья "Болоньезе"', price: "360" },
  ],
};

export const FirstSlide = () => {
  return (
    <Container>
      <Images>
        <Img1 src={img1} alt="" />
        <Img2 src={img2} alt="" />
        <Img3 src={img3} alt="" />
      </Images>
      <Menu>
        <FirstBlock>
          <Category>
            <Title>CАлаты и закуски</Title>
            <Items>
              {itemsarray.salats.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
          <Category>
            <Title>Супы</Title>
            <Items>
              {itemsarray.soups.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
        </FirstBlock>
        <HR />
        <SecondBlock>
          {" "}
          <Category>
            <Title>Эльзасские пиццы</Title>
            <Items>
              {itemsarray.pizzes.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
          <Category>
            <Title> Пасты и ризотто</Title>
            <Items>
              {itemsarray.pasteRizzoto.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
        </SecondBlock>
      </Menu>
      <Anotate>*меню предоставлено не в полном объеме</Anotate>
    </Container>
  );
};
export const Anotate = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  @media (max-width: 1500px) {
    font-size: 14px;
    bottom: 10px;
    right: 10px;
  }
  @media (min-width: 2500px) {
    font-size: 24px;
  }
`;
const Img1 = styled.img`
  width: 420px;
  height: 420px;
  position: absolute;
  @media (max-width: 1500px) {
    width: 315px;
    height: 315px;
  }
  @media (min-width: 2500px) {
    width: 630px;
    height: 630px;
  }
`;
const Img2 = styled.img`
  width: 420px;
  height: 420px;
  position: absolute;
  right: 0;
  top: calc(50% - 210px);
  z-index: 2;
  @media (max-width: 1500px) {
    width: 315px;
    height: 315px;
    position: absolute;
    right: 0;
    top: calc(50% - 157px);
    z-index: 2;
  }
  @media (min-width: 2500px) {
    width: 630px;
    height: 630px;
    top: calc(50% - 315px);
  }
`;
const Img3 = styled.img`
  width: 420px;
  height: 420px;
  @media (max-width: 1500px) {
    width: 315px;
    height: 315px;
  }
  @media (min-width: 2500px) {
    width: 630px;
    height: 630px;
  }

  position: absolute;
  bottom: 0;
`;
const Title = styled.div`
  width: 100%;
  height: 45px;
  background-color: #0dbda3;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-family: Alieron Regular;
  font-family: system-ui;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 40px;
  @media (max-width: 1500px) {
    font-size: 25px;
  }
  @media (min-width: 2500px) {
    font-size: 40px;
    height: 72px;
  }
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-size: 20px;
  color: #54443e;
  @media (max-width: 1500px) {
    font-size: 14px;
  }
  @media (min-width: 2500px) {
    font-size: 32px;
  }
`;
const ItemName = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70%;
`;
const Price = styled.div`
  width: 30%;
  display: flex;
  padding-right: 10px;
  box-sizing: border-box;

  justify-content: flex-end;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const Images = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 685px;
`;
const FirstBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Category = styled.div`
  width: 412px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1500px) {
    width: 309px;
  }
  @media (min-width: 2500px) {
    width: 630px;
  }
`;
const HR = styled.hr`
  height: 100%;
  width: 8px;
  background-color: #0dbda3;
  color: #0dbda3;
  border: 0;
`;
const SecondBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
