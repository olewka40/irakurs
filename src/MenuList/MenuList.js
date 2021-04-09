import React from "react";
import styled from "styled-components";
import cezar from "./imagesMenu/foto3.png";

const salatMenu = [
  {
    name: "«Капрезе»",
    consistOf:
      "Томат, сыр Моцарелла, соус Песто, бальзамический соус,\n" +
      '    базилик "100/60/30" гр 360 ккал',
    price: 360,
    image: cezar,
  },
  {
    name: "«12312»",
    consistOf:
      "Томат, сыр Моцарелла, соус Песто, бальзамический соус,\n" +
      '    базилик "100/60/30" гр 360 ккал',
    price: 360,
    image: cezar,
  },
  {
    name: "«К12312апрезе»",
    consistOf:
      "Томат, сыр Моцарелла, соус Песто, бальзамический соус,\n" +
      '    базилик "100/60/30" гр 360 ккал',
    price: 360,
    image: cezar,
  },
  {
    name: "«36233»",
    consistOf:
      "Томат, сыр Моцарелла, соус Песто, бальзамический соус,\n" +
      '    базилик "100/60/30" гр 360 ккал',
    price: 360,
    image: cezar,
  },
];
const soups = [
  { name: "", consistOf: "sostav", price: 99, image: cezar },
  { name: "", consistOf: "sostav", price: 99, image: cezar },
  { name: "", consistOf: "sostav", price: 99, image: cezar },
  { name: "", consistOf: "sostav", price: 99, image: cezar },
];

export const MenuList = () => {
  return (
    <MenuListContainer>
      <Info>
        Представлено меню для ознакомления.
        <br />
        Полное меню вы можете получить на <br />
        WhatsApp по номеру 89105410257.
      </Info>

      <HeaderMenu>
        <Title>МЕНЮ</Title>
      </HeaderMenu>
      <MenuGrid>
        <Group>
          <GroupTitle> Салаты и закуски</GroupTitle>
          <GruopItems>
            {salatMenu.map((e) => (
              <Item>
                <Image src={e.image} />
                <ItemText>
                  <TitleItem>{e.name}</TitleItem>
                  <ItemSostav>{e.consistOf}</ItemSostav>
                  <ItemPrice>{e.price} РУБ</ItemPrice>
                </ItemText>
              </Item>
            ))}
          </GruopItems>
        </Group>
        <Group>
          <GroupTitle> Супы </GroupTitle>
          <GruopItems>
            {soups.map((e) => (
              <Item>
                <Image src={cezar} />
                <ItemText>
                  <TitleItem>«Капрезе»</TitleItem>
                  <ItemSostav>
                    Томат, сыр Моцарелла, соус Песто, бальзамический соус,
                    базилик 100/60/30 гр 360 ккал
                  </ItemSostav>
                  <ItemPrice>360 РУБ</ItemPrice>
                </ItemText>
              </Item>
            ))}
          </GruopItems>
        </Group>
      </MenuGrid>
    </MenuListContainer>
  );
};

const MenuListContainer = styled.div`
  width: 100%;
  background: #0dbda3;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 34px;
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  font-weight: 300;
`;
const HeaderMenu = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const MenuGrid = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 130px;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  color: white;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`;
const GroupTitle = styled.div`
  font-size: 250%;
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  font-weight: 500;
  text-transform: uppercase;
`;
const GruopItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Item = styled.div`
  width: 800px;
  height: 260px;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  border: 8px solid white;
  margin: 1%;
`;
const Image = styled.img`
  width: 50%;
  height: 100%;

  border-radius: 5px;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px;
`;
const ItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-size: 28px;
  font-weight: 500;
`;
const TitleItem = styled.div`
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ItemSostav = styled.div`
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
`;
