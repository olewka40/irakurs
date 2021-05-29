import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/21.jpg";
import img2 from "./imagesMenu/22.jpg";
import img3 from "./imagesMenu/23.jpg";
import { Anotate } from "./Slide1";
const itemsarray = {
  hot: [
    { name: "Куриные бёдра с жареннымиовощами и картофелем", price: "430" },
    {
      name: "Шницель из индейки/свинины с грибным соусом, салатом и картофелем",
      price: "485",
    },
    {
      name: "Филе Миньон в соусе с картофельным пюре, брокколи и спаржей",
      price: "780",
    },
    {
      name: "Свинные рёбра-барбекю с картофелем и салатом КоулСлоу",
      price: "580",
    },
    { name: "Рыба дня", price: "540" },
    { name: "Стейк сёмги", price: "790" },
    {
      name:
        "Утиное филе с соусом из красного вина и ягод, картофельным пюре, карамализированным луком и овощами",
      price: "860",
    },
  ],
  breakfasts: [
    { name: "Каша овсяная на молоке", price: "150" },
    { name: "Каша пшеничная на молоке с тыквой", price: "170" },
    { name: "Каша рисовая на молоке", price: "160" },
    { name: "2 сырника со сметаной/джемом", price: "160" },
    { name: "2 блинчика со сметаной/джемом", price: "150" },
    { name: "2 франзуцских тоста", price: "120" },
    { name: "Сэндвич с ветчиной и сыром", price: "195" },
    { name: "Сэндвич с беконом и яйцом", price: "210" },
    { name: "Сэндвич с салями и моцареллой", price: "220" },
    { name: "Омлет (глазунья, пашот, скрэмбл) из 2х яиц", price: "120" },
  ],
  streetFood: [
    { name: "Бифбургер", price: "495" },
    { name: "Хот дог", price: "355" },
    { name: "Куриное карри", price: "425" },
    { name: "Азиатская лапша", price: "375" },
    { name: "Куриное соте", price: "395" },
    { name: "Вьетнамский микс", price: "425" },
    { name: "Китайская лапша", price: "450" },
    { name: 'Лапша "Бангкок"', price: "450" },
    { name: "Куриные крылышки", price: "295" },
  ],
  childMenu: [
    { name: "Суп-лапша на курином бульоне", price: "100" },
    { name: "Салат овощной с растительным маслом", price: "100" },
    { name: "Мини-бургер", price: "150" },
    { name: "Мини-шашлык куриный", price: "170" },
    { name: "Макароны отварные с маслом", price: "90" },
    { name: "Картошка фри", price: "90" },
    { name: "Омлет паровой из 2х яиц", price: "120" },
    { name: "Мини-пицца с ветчиной и сыром", price: "130" },
  ],
};

export const SecondSlide = () => {
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
            <Title>Горячие блюда</Title>
            <Items>
              {itemsarray.hot.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
          <Category>
            <Title>Завтраки</Title>
            <Items>
              {itemsarray.breakfasts.map((e) => (
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
            <Title>Street food</Title>
            <Items>
              {itemsarray.streetFood.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
          <Category>
            <Title> Детское меню</Title>
            <Items>
              {itemsarray.childMenu.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}</Price>
                </Item>
              ))}
            </Items>
          </Category>
        </SecondBlock>
      </Menu>{" "}
      <Anotate>*меню предоставлено не в полном объеме</Anotate>
    </Container>
  );
};

const Img1 = styled.img`
  width: 512px;
  height: 340px;
  position: absolute;
  left: -150px;
`;
const Img2 = styled.img`
  width: 410px;
  height: 346px;
  position: absolute;
  right: 10px;
  top: calc(50% - 173px);
`;
const Img3 = styled.img`
  width: 334px;
  height: 327px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`;
const Title = styled.div`
  width: 412px;
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
`;
const Images = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75%;
  height: 685px;
`;
const FirstBlock = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
const HR = styled.hr`
  height: 100%;
  width: 8px;
  background-color: #0dbda3;
  color: #0dbda3;
  border: 0;
`;
const SecondBlock = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
