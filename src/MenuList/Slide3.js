import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/31.jpg";
import img2 from "./imagesMenu/32.jpg";
import img3 from "./imagesMenu/33.jpg";

const itemsarray = {
  hot: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
  ],
  breakfasts: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
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
            <Title>Горячие блюда</Title>
            <Items>
              {itemsarray.hot.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}р</Price>
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
                  <Price>{e.price}р</Price>
                </Item>
              ))}
            </Items>
          </Category>
        </FirstBlock>
      </Menu>
    </Container>
  );
};

const Img1 = styled.img`
  position: absolute;
  width: 340px;
  right: 0;
`;
const Img2 = styled.img`
  width: 410px;
  height: 346px;
  position: absolute;
  left: 10px;
  top: calc(50% - 173px);
`;
const Img3 = styled.img`
  width: 380px;
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 0;
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
  width: 30%;
  height: 100%;
  position: relative;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 60%;
  height: 685px;
`;
const FirstBlock = styled.div`
  width: 70%;
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
