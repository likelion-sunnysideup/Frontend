import styled from 'styled-components';

/** Login.jsx: 로그인 페이지 */
export const LoginPart = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  /*background-color: skyblue;*/
`;

// 타이틀 컨테이너
export const TitleContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  /*background-color: navy;*/
`;

// :) 스타일
export const SmileBox = styled.div`
  position: absolute;
  width: 48%;
  height: 30%;
  font-size: 12em;
  font-weight: bold;
  font-family: 'BMJUA';
  display: flex;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.5;
  transition: all 0.7s;   
  color: #F3C20B;
  :hover{
    color: #F3B85E;
  }
  /*background-color: gray;*/
  transform: translate(-5px, -173px);
`;

// 탑 라인 스타일
export const TopLineStyle = styled.div`
  width: 100%;
  height: 3%;
  border-radius: 0px 20px 20px 0px;
  transform: rotate(-5deg) scale(1.2, 1.5) translateX(-300px);
  transition: all 0.7s;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes slidein {
    from {
      width: 100%
    }
  
    to {
      width: 120%;
    }
  }
  background-color: #F3C20B;
  margin: 0 0 3% 0;
  opacity: 0.5;
`;

// 타이틀 박스
export const TitleBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /*background-color: red;*/
`;

// 타이틀 텍스트 박스
export const WebTitle = styled.div`
  width: 62%;
  height: 100%;
  margin: 2%;
  font-size: 5em;
  font-family: Jalnan;
  display: flex;
  align-items: center;
  flex-direction: column;

  /*background-color: orange;*/
`;

// 탑 텍스트 > SUNNY
export const TopText = styled.div`
  width: 100%;
  height: 40%;
  font-size: 1.6em;
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  /*background-color: red;*/
`;

// 미드 텍스트 > side
export const MidText = styled.div`
  width: 100%;
  height: 30%;
  font-size: 1.4em;
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /*background-color: green;*/
`;

// 바텀 텍스트 > UP!
export const BotText = styled.div`
  width: 100%;
  height: 30%;
  font-size: 1.2em;
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: pink;*/
`;

// 로그인 컨테이너
export const LoginContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /*background-color: white;*/
`;

// 웹 정보 간단 설명
export const WebInfo = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;  
  font-family: NotoSansKR;
  font-size: 2em;

  /*background-color: aqua;*/
`;

// 로그인 버튼 박스
export const LoginBtnBox = styled.div`
  width: 80%;
  height: 12%;
  display: flex;
  align-items: center;
  margin: 0 0 0 2%;

  /*background-color: red;*/
`;

// 로그인 버튼
export const LoginBtn = styled.button`
  width: 50%;
  height: 80%;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 1.7em;
  color: #ffffff;
  font-family: NotoSansKR;
  transition: all 0.7s;
  :hover {
    color: #ffffff;
    box-shadow: 500px 0 0 0 rgba(0, 0, 0, 0.2) inset;
  }
  background-color: #F3C20B;
`;

// 바텀 큰 라인 스타일
export const BotBigLineStyle = styled.div`
  width: 100%;
  height: 3%;
  transform: rotate(-5deg) scale(1.2, 1.5) translateX(150px);
  transition: all 0.7s;
  animation-duration: 3s;
  animation-name: slideout;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 20px 0px 0px 20px;
  opacity: 0.2;
  @keyframes slideout {
    from {
      width: 100%
    }
  
    to {
      width: 100%;
    }
  }
  background-color: #F3C20B;
  margin: 3% 0 0 0;
`;

// 바텀 작은 라인 스타일
export const BotSmallLineStyle = styled(BotBigLineStyle)`
  transform: rotate(-5deg);
  margin: 1% 0 0 30%;
`;