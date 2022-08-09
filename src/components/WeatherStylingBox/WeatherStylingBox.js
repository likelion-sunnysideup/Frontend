import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

/** WeatherStylingBox.jsx: 초단기예보 + 옷 차림 추천 컨테이너 */
// 초단기예보 + 옷 차림 추천 컨테이너
export const RecommendContainer = styled.div`
  width: 100%;
  height: 38%;
  margin: 1% 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  /*background-color: #8ec0e4;*/
`;

// 시간 백그라운드 
export const TimeBackground = styled.div`
  width: 20%;
  height: 90%;
  border-radius: 10px;

  background-color: #f3c20b;
`;

// "외출 시작 & 끝 시간" 텍스트
export const TextBox = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85em;
  @media (max-width: 800px) {
    font-size: 0.3em;
  }

  /*background-color: red;*/
`;

// "외출 시작 시간" 백그라운드
export const OutBackground = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: flex-end;

  /*background-color: #5CAB7D;*/
`;

// "외출 시작 시간"
export const OutTimeBox = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: red;*/
`;

// "외출 끝 시간" 백그라운드
export const InBackground = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: flex-end;

  /*background-color: #c9c9c9;*/
`;

// "외출 끝 시간"
export const InTimeBox = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: blue;*/
`;

export const CustomReactDatePicker = styled(ReactDatePicker)`
  width: 84%;
  height: 1.8em;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.7em;
  icon: black;
`;

// 추천 코디 확인하기 버튼 백그라운드
export const StyleCheckBackground = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #80d4f6;*/
`;

// 추천 코디 확인하기 버튼
export const StyleCheckBtn = styled.button`
  width: 11em;
  height: 2.5em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: bold;
  background-color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 0.4em;
  }
  transition: all 0.2s linear;
  &:hover {
    color: #F3C20B;
  }
`;

// 메인 > 오늘 날씨 레이아웃
export const MainTodayWeatherContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  /*background-color: #c6a49a;*/
`;

// 메인 > 오늘 날씨 백그라운드
export const MainTodayWeatherBackground = styled.div`
  width: 80%;
  height: 88%;
  border-radius: 10px;
  display: flex;


  background-color: #ffffff;
`;

// 메인 > 오늘 날씨 > 아이콘 컨테이너
export const MainIconContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #EE7785;*/
`;

// 메인 > 오늘 날씨 > 아이콘 박스
export const MainIconBox = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #ffffff;*/
`;

// 메인 > 오늘 날씨 > 아이콘 이미지
export const MainIconImg = styled.img`
  width: 5vmin;
  height: 5vmin;
`;

// 메인 > 오늘 날씨 > 날씨 정보
export const MainInfoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /*background-color: #84B1ED;*/
`;

// 메인 > 오늘 날씨 > 요일 + 지역
export const MainDayCityBox = styled.div`
  width: 100%;
  height: 20%;

  /*background-color: red;*/
`;

// 메인 > 오늘 날씨 > 온도
export const MainTemperatureBox = styled.div`
  width: 100%;
  height: 40%;

  /*background-color: blue;*/
`;

// 메인 > 오늘 날씨 > 날씨 설명
export const MainStateBox = styled.div`
  width: 100%;
  height: 20%;

  /*background-color: orange;*/
`;

// 메인 > 오늘 날씨 > 강수량
export const MainRainfallBox = styled.div`
  width: 100%;
  height: 20%;

  /*background-color: gray;*/
`;

// 옷 추천 백그라운드 
export const StyleBackground = styled.div`
  width: 70%;
  height: 87%;
  border-radius: 10px;
  border: 4px solid #f3c20b;
  display: flex;
  justify-content: center;

  background-color: #ffffff;
`;

// 스타일 추천 이미지 박스
export const StyleImgBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /*background-color: #C5E99B;*/
`;

// 스타일 추천 이미지 
export const StyleImg = styled.img`
  width: 8vmin;
  height: 8vmin;
`;

// 스타일 추천 텍스트 박스
export const StyleTextBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #548687;*/
`;

// 스타일 추천 텍스트
export const StyleText = styled.div`
  font-size: 1.2em;

  @media (max-width: 1000px) {
    font-size: 0.4em;
  }
`;

