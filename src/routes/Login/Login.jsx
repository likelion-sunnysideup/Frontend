import React from 'react';
import { 
  LoginPart,
  TopLineStyle,
  BotLineStyle,
  BotLineStyle2,
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
  LeftEyeStyle,
  RightEyeStyle,
  SmileStyle,
} from './Login';

function Login(props) {
  return (
    <>
      <LoginPart>
        <TitleContainer>
            <SmileStyle/>
            <LeftEyeStyle/>
            <RightEyeStyle/>
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
            <LoginBtn>LOGIN</LoginBtn>
          </LoginBtnBox>
          <BotLineStyle/>
          <BotLineStyle2/>
        </LoginContainer>
      </LoginPart>
    </>
  );
}

export default Login;