import React from "react";
import styled from "styled-components";

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
            {[1, 2, 3, 4].map((e) => (
              <Item>
                <Image></Image>
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
  height: 100%;
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
`;
const GroupTitle = styled.div`
  font-size: 250%;
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  font-weight: 400;
`;
const GruopItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 44%;
  height: 34%;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  border: 6px solid white;
  margin: 1%;
`;
const Image = styled.div`
  width: 50%;
  background: chocolate;
  border-radius: 12px;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const ItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
`;
const TitleItem = styled.div``;
const ItemSostav = styled.div``;
