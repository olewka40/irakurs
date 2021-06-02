import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/31.jpg";
import img2 from "./imagesMenu/32.jpg";
import img3 from "./imagesMenu/33.jpg";
import { Anotate } from "./Slide1";

const itemsarray = {
  bar: [
    { name: "Эспрессо 50мл", price: "90р" },
    { name: "Двойной эспрессо 100мл", price: "120р" },
    { name: "Американо 200мл/300мл", price: "130р/145р" },
    { name: "Капучино 200мл/300мл", price: "145р/165р" },
    { name: "Латте 200мл/300мл", price: "160р/180р" },
    { name: "Раф 200мл/300мл", price: "180р/210р" },
    { name: "Флэт Уайт 200мл/300мл", price: "160р/180р" },
    { name: "Гляссе 200мл", price: "180р" },
    { name: "Горячий шоколад 200мл", price: "160р" },
    { name: "Раф Соленая карамель", price: "210р" },
    { name: "Миндальный латте", price: "210р" },
  ],
  bar1: [
    { name: "Пакетированный чай", price: "222" },
    {
      name: "Чай в чайнике черный/зелёный с добавками 350мл/600мл",
      price: "222",
    },
    { name: "Чай Матча, Облепиховый, Малиновый 350мл/600мл", price: "222" },
    { name: "Фреш апельсиновый/морковный/яблочный", price: "222" },
    { name: "Фреш морковный со сливками", price: "222" },
    {
      name:
        "Молочный коктейль ванильный/шоколадный/кофейный/карамельный с сиропом",
      price: "222",
    },
    {
      name:
        "Молочный коктейль банановый, клубничный, вишневый, киви с натуральными фруктами",
      price: "222",
    },
  ],
  desserts: [
    { name: "Чизкейк с топпингом", price: "130р" },
    { name: "Баваруа фруктово-кремовый", price: "125р" },
    { name: "Яблочный голландский торт", price: "130р" },
    { name: "Фруктовый песочный крамбл", price: "130р" },
    { name: "Тирамису", price: "130р" },
    { name: "Панаккота", price: "120р" },
    { name: "Крем-карамель", price: "100р" },
    {
      name: "Мороженное ванильное/шоколадное/клубничное без наполнителя",
      price: "70р",
    },
    {
      name:
        "Мороженное ванильное/шоколадное/клубничное с наполнителем (шоколад, орехи, фруктовый топпинг)",
      price: "100р",
    },
  ],
  desserts1: [
    { name: "Ваинльный маффин", price: "100р" },
    { name: "Шоколадный маффин", price: "110р" },
    { name: "Фруктовый маффин", price: "120р" },
    { name: "Ягодный маффин", price: "130р" },
    { name: "Вафля оригинальная", price: "130р" },
    { name: "Наполнители для вафли:", price: "" },
    { name: "-взбитые сливки", price: "30р" },
    { name: "-мороженное ванильное", price: "70р" },
    { name: "-нутелла", price: "40р" },
    { name: "-клубника/вишня в сиропе", price: "80р" },
    { name: "-маршмеллоу", price: "30р" },
    { name: "-банан/киви", price: "30р" },
  ],
};

export const ThirdSlide = () => {
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
            <Title>Десерты</Title>
            <Blocks>
              <Items>
                {itemsarray.desserts.map((e) => (
                  <Item>
                    <ItemName>{e.name}</ItemName>
                    <Price>{e.price}</Price>
                  </Item>
                ))}
              </Items>
              <Items>
                {itemsarray.desserts1.map((e) => (
                  <Item>
                    <ItemName>{e.name}</ItemName>
                    <Price>{e.price}</Price>
                  </Item>
                ))}
              </Items>{" "}
            </Blocks>
          </Category>
          <Category>
            <Title>Напитки</Title>
            <Blocks>
              <Items>
                {itemsarray.bar.map((e) => (
                  <Item>
                    <ItemName>{e.name}</ItemName>
                    <Price>{e.price}</Price>
                  </Item>
                ))}
              </Items>
              <Items>
                {itemsarray.bar1.map((e) => (
                  <Item>
                    <ItemName>{e.name}</ItemName>
                    <Price>{e.price}р</Price>
                  </Item>
                ))}
              </Items>
            </Blocks>
          </Category>
        </FirstBlock>
      </Menu>{" "}
      <Anotate>*меню предоставлено не в полном объеме</Anotate>
    </Container>
  );
};

const Img1 = styled.img`
  position: absolute;
  width: 340px;
  right: 0;
  @media (max-width: 1500px) {
    width: 255px;
  }
  @media (min-width: 2500px) {
    width: 510px;
  }
`;
const Img2 = styled.img`
  width: 410px;
  height: 346px;
  position: absolute;
  left: 10px;
  top: calc(50% - 173px);
  @media (max-width: 1500px) {
    width: 307px;
    height: 259px;
    top: calc(50% - 100px);
    left: -150px;
    z-index: 2;
  }
  @media (min-width: 2500px) {
    width: 615px;
    height: 519px;
    top: calc(50% - 259px);
    left: -300px;
    z-index: 2;
  }
`;
const Img3 = styled.img`
  width: 380px;
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 0;
  @media (max-width: 1500px) {
    width: 285px;
  }
  @media (min-width: 2500px) {
    width: 570px;
  }
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
  @media (max-width: 1500px) {
    font-size: 26px;
    width: 350px;
    height: 38px;
  }
  @media (min-width: 2500px) {
    height: 72px;
    font-size: 42px;
  }
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 23px;
  @media (max-width: 1500px) {
    line-height: 17px;
  }
`;
const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    margin: 0 20px;
  }
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
    font-size: 30px;
    line-height: 36px;
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
`;
const Images = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
  @media (max-width: 1500px) {
    width: 15%;
  }
  @media (min-width: 2500px) {
    width: 15%;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 60%;
`;
const FirstBlock = styled.div`
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
  box-sizing: border-box;
`;
