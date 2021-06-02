import React from "react";
import styled from "styled-components";
import contacts from "../images/egegeg.jpg";

export const ContactsSlide = () => {
  return (
    <ContactsContainer>
      <Title>НАШИ КОНТАКТЫ</Title>
      <Block>
        <Image src={contacts} alt="" />
        <Contacts>
          <Contact>
            <TitleContact>АДРЕС</TitleContact>
            <ContactInfo>г. Калуга ул.Театральная 43/8 </ContactInfo>
            <ContactInfo>г. Калуга ул. Тульская 67</ContactInfo>
          </Contact>
          <Contact>
            <TitleContact>EMAIL</TitleContact>
            <ContactInfo>cafevangogh@inbox.ru</ContactInfo>
          </Contact>

          <Contact>
            <TitleContact>ТЕЛЕФОН</TitleContact>
            <ContactInfo>+7(991) 409-44-11</ContactInfo>
          </Contact>
          <Contact>
            <TitleContact>ГРАФИК РАБОТЫ</TitleContact>
            <ContactInfo>Ежедневно с 9:00 до 23:00</ContactInfo>
          </Contact>
          <Contact>
            <TitleContact></TitleContact>
            <ContactInfo></ContactInfo>
          </Contact>
        </Contacts>
      </Block>
    </ContactsContainer>
  );
};

const ContactsContainer = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 100px;
  font-style: normal;
  color: white;
  text-decoration: none;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  font-size: 144px;
  @media (min-width: 2000px) {
    font-size: 200px;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: row;
  height: 607px;
  @media (min-width: 2330px) {
    height: 900px;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 135%;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const TitleContact = styled.div`
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;

  font-size: 40px;
`;
const ContactInfo = styled.div`
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  font-size: 40px;
`;
const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgb(13, 189, 163);
`;
