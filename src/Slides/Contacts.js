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
          {/**/}
          <Contact>
            <TitleContact>ТЕЛЕФОН</TitleContact>
            <ContactInfo>+7(991) 409-44-11</ContactInfo>
          </Contact>
          <Contact>
            <TitleContact>ГРАФИК РАБОТЫ</TitleContact>
            <ContactInfo>Театральная с 9:00 до 23:00</ContactInfo>
            <ContactInfo>Тульская с 8:00 до 20:00</ContactInfo>
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
  @media (max-width: 1500px) {
    font-size: 100px;
  }
  @media (min-width: 2000px) {
    font-size: 200px;
    padding: 100px 100px;
  }
`;
const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 679px;
  @media (max-width: 1500px) {
    height: 535px;
  }
  @media (min-width: 2330px) {
    height: 913px;
    margin-top: 61px;
  }
`;
const Image = styled.img`
  width: 60%;
  @media (max-width: 1500px) {
    width: 70%;
  }
  @media (min-width: 2330px) {
    width: 75%;
  }
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
  @media (max-width: 1500px) {
    font-size: 23px;
  }
  @media (min-width: 2330px) {
    font-size: 56px;
  }
`;
const ContactInfo = styled.div`
  font-family: Alieron Regular, serif;
  font-family: system-ui;
  font-size: 40px;
  @media (max-width: 1500px) {
    font-size: 24px;
  }
  @media (min-width: 2330px) {
    font-size: 48px;
  }
`;
const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgb(13, 189, 163);
  @media (min-width: 2330px) {
    width: 30%;
  }
`;
