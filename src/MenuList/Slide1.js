import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/1.jpg";
import img2 from "./imagesMenu/12.jpg";
import img3 from "./imagesMenu/1.jpg";
const itemsarray = {
  salats: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
  ],
  soups: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
  ],
  pizzes: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
  ],
  pasteRizzoto: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
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
                  <Price>{e.price}р</Price>
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
                  <Price>{e.price}р</Price>
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
                  <Price>{e.price}р</Price>
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
                  <Price>{e.price}р</Price>
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
const Anotate = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
const Img1 = styled.img`
  width: 420px;
  height: 420px;
  position: absolute;
`;
const Img2 = styled.img`
  width: 420px;
  height: 420px;
  position: absolute;
  right: 0;
  top: calc(50% - 210px);
  z-index: 2;
`;
const Img3 = styled.img`
  width: 420px;
  height: 420px;
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
  width: 50%;
`;
const Price = styled.div`
  width: 50%;
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
