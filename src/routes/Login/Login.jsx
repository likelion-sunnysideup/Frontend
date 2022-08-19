import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LoginPart,
  SmileBox,
  TopLineStyle,
  BotBigLineStyle,
  BotSmallLineStyle,
  TitleContainer,
  TitleBox,
  WebTitle,
  TopText,
  MidText,
  BotText,
  LoginContainer,
  WebInfo,
  LoginBtnBox,
  LoginBtn,
} from './Login';

function Login({ setLogin }) {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/main')
    setLogin(true);
  }

  return (
    <>
      <LoginPart>
        <TitleContainer>
          <SmileBox>{':)'}</SmileBox>
          <TopLineStyle/>
          <TitleBox>
            <WebTitle>
              <TopText>SUNNY</TopText> 
              <MidText>side</MidText> 
              <BotText>UP!</BotText>
            </WebTitle>
          </TitleBox>
        </TitleContainer>
        <LoginContainer>
          <WebInfo>"오늘의 날씨에 맞는 옷차림을 추천해드려요"</WebInfo>
          <LoginBtnBox>
              <LoginBtn onClick={goLogin}>LOGIN</LoginBtn>
          </LoginBtnBox>
          <BotBigLineStyle/>
          <BotSmallLineStyle/>
        </LoginContainer>
      </LoginPart>
    </>
  );
}

export default Login;