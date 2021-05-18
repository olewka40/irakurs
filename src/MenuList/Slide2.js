import React from "react";
import styled from "styled-components";
import img1 from "./imagesMenu/21.jpg";
import img2 from "./imagesMenu/22.jpg";
import img3 from "./imagesMenu/23.jpg";
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
  streetFood: [
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
    { name: "Капризе", price: "222" },
  ],
  childMenu: [
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
        <HR />
        <SecondBlock>
          {" "}
          <Category>
            <Title>Street food</Title>
            <Items>
              {itemsarray.streetFood.map((e) => (
                <Item>
                  <ItemName>{e.name}</ItemName>
                  <Price>{e.price}р</Price>
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
                  <Price>{e.price}р</Price>
                </Item>
              ))}
            </Items>
          </Category>
        </SecondBlock>
      </Menu>
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
