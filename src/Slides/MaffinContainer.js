import React from "react";
import styled from "styled-components";
import maf from "../images/maf.jpg";
import bananaVafles from "../images/banana_vafles.jpg";
// тут ты импортируешь Хук ( про него напиши шо он делает на сайте есть инфа главнов про react-router)
import { useHistory } from "react-router";

export const MaffinContainer = () => {
  // тут ты присваиваешь переменной этот хук
  const history = useHistory();
  // це функция которая переадресует тебя в меню ( прописан путь в апп js там найдешь название MEnuList и путь, обязательно напиши  шо называния совпадать должны путей иначе хуй)
  const toMenu = () => {
    // тут ты обращаешься к хистори после нажатия на кнопку ( на онклике ниже в кнопке функция эта висит) и в методе пуш передаешь путь к меню и все гуд
    history.push("/menu");
  };
  return (
    <>
      <LeftPart>
        <LogoContainer>
          <MafLogoImg src={maf} />
          <Text>
            <TopText>
              <div>Кафе</div>
              <div>МАФФИН</div>
            </TopText>

            <BotText>Ежедневно с 9:00 до 23:00</BotText>
          </Text>
        </LogoContainer>
        <Menu>
          <MenuText>
            Вкуснейшие десерты
            <br />
            Свежесваренный кофе
            <br />
            Бизнес-ланчи
          </MenuText>
          <MenuNav>
            {/* tut как раз ты переджаешь функцию в онклик, скажешь что так пизже потому что не подсвечивается текст и нет загромождения и прочей хуеты*/}
            <MenuButton onClick={toMenu}>МЕНЮ</MenuButton>
          </MenuNav>
        </Menu>
      </LeftPart>
      <RightPart>
        <Star>
          {/* это векторная графика твоей Стар, хуета, можешь не сильно на неё внимание обращать просто скажи что скопировала из конструктора */}
          <svg
            fill="white"
            x="0px"
            y="0px"
            viewBox="0 0 500 500.008"
            enableBackground="new 0 0 500 500.008"
            role="img"
            aria-label="Orange Star"
          >
            <g id="__id15_skijbwbwsb">
              <path d="M250,0c0,138.072-111.936,250-250,250c138.071,0,250,111.935,250,250.008C250,361.933,361.931,250,500,250   C361.931,250,250,138.073,250,0z" />
            </g>
          </svg>
        </Star>
        {/* тут ты в срц ссылку кидаешь на картинку которая у тебя в папке имагес лежит, чтобы опять же таки не говнокодить , а бабанавафелс импортишь сверху */}
        <BananaVafelsImg src={bananaVafles} />
      </RightPart>
    </>
  );
};
const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 72.5%;
`;
const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 27.5%;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MafLogoImg = styled.img`
  margin-top: 0.351%;
  height: 94.5%;
  max-width: 100%;
`;
const Text = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 105px;
  transform: translate(5%, 43%);
`;
const TopText = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 200px;
  margin-top: -8.3%;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  @media (min-width: 2000px) {
    font-size: 250px;
  }

  // это селектор называется (:) типа ты говоришь последнему элементу который находится тут что он должен на 100 подняться
  div:last-child {
    margin-top: -100px;
  }
`;
const BotText = styled.div`
  font-weight: 400;
  font-style: normal;
  font-family: Roboto Condensed, sans-serif;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 48px;
  margin-left: 10px;
  @media (min-width: 2000px) {
    font-size: 85px;
  }
`;
const Star = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 40%;
  margin-top: 5%;
  margin-right: 2%;
  > svg {
    width: 30%;
    @media (min-width: 2000px) {
      width: 40%;
    }
  }
`;
const BananaVafelsImg = styled.img`
  width: 100%;
  //height: 600px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin-left: 64px;

  margin-top: -25px;
  height: 95%;
`;
const MenuText = styled.div`
  font-size: 47px;

  line-height: 50px;
  font-family: Alieron Regular;
  font-family: system-ui;
  @media (min-width: 2000px) {
    font-size: 90px;
    line-height: 100px;
    width: 100%;
  }
`;
const MenuButton = styled.button`
  width: 26%;
  height: 36%;
  margin-right: 20px;
  border-radius: 20px;
  color: black;
  outline: none;
  border: 0;
  font-family: Raleway Heavy, sans-serif;
  font-family: system-ui;
  font-weight: 700;
  border-style: solid none;
  font-size: 36px;
  margin-bottom: 20px;
  @media (min-width: 2000px) {
    width: 250px;
    height: 150px;
  }
`;
const MenuNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 62%;
`;
