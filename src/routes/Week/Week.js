import styled from 'styled-components'; // ok

/** Week.js: 주간 날씨 정보(사이드 바) */
// "사이드 바" 전체 화면
export const SidebarPart = styled.div`
  width: 23%;
  height: 90vh;

  /*background-color: #c9c9c9*/
`;

// 헤더 컨테이너
export const SidebarHeaderContatiner = styled.div`
  width: 100%;
  height: 10%; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  
  /*background-color: #f55354;*/
`;

// 이모지 백그라운드
export const SidebarEmogiBackground = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #586fab;*/
`;

// 해 이미지
export const SidebarEmogi = styled.img`
  width: 3.5em;
  height: 3.5em;
`;

// 사이드바 사용 방법 백그라운드
export const SidebarInfoBackground = styled.div`
  width: 13em;
  height: 3em; 
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #f8faff;*/
`;

// 사이드바 사용 방법 텍스트
export const SidebarInfoText = styled.div`
  font-size: 0.9em;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
`;

// 위치 검색 컨테이너
export const SearchbarContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: black;*/
`;

// 위치 검색 백그라운드
export const SearchbarBackground = styled.div`
  width: 90%;
  height: 75%;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  position: relative;

  background-color: #F3B85E;
`;

// 돋보기 백그라운드
export const IconBackground = styled.div`
  width: 20px;
  height: 20px;
  
  /*background-color: #5CAB7D;*/
`;

// 돋보기 이미지
export const SearchImg = styled.img`
  width: 15px;
  height: 15px;

  cursor: pointer;
`;

// 위치 검색 인풋창
export const LocationInput = styled.input`
  width: 70%;
  height: 1.2em;
  border: none;
  outline: none;
  color: white;
  background-color: #f3b85e;

  ::placeholder{
    color: white;
  }
`;

// 사이드바 오늘 날씨 정보 컨테이너
export const SidebarTodayWeatherContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3% 0 0 0;

  /*background-color: #5CAB7D8;*/
`;

// 사이드바 오늘 날씨 정보 
export const SidebarTodayWeatherBackground = styled.div`
  width: 80%;
  height: 90%;
  border: 2px dashed #f3b85e;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
`;

export const CurrentCity = styled.div`
  width: 80%;
  height: 20%;
  font-size: 1.1em;  
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    font-size: 0.9em;
  }
  /*background-color: green;*/
`;

export const CurrentTemp = styled.div`
  width: 80%;
  height: 35%;
  font-weight: bold;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: red;*/
`;

export const CurrentState = styled.div`
  width: 80%;
  height: 20%;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: green;*/
`;

export const CurrentTempBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /*background-color: red;*/
`;

export const CurrentMin = styled.div`
  font-weight: bold;
  font-size: 0.8em;
  
  /*background-color: yellow;*/
`;

export const CurrentMax = styled.div`
  font-weight: bold;
  font-size: 0.8em;

  /*background-color: blue;*/
`;

// 주간 날씨 컨테이너
export const WeekWeatherContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #3F4B3B;*/
`;

// 주간 날씨
export const WeekWeatherBackground = styled.div`
  width: 85%;
  height: 93%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f3b85e;
`;

// 요일 별 날씨 박스
export const DayWeatherBox = styled.div`
  width: 90%;
  height: 12%;
  margin: 1.5%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    opacity: 0.9;
    transform: translate(5px);
  }
  background-color: ${({ isSelected }) => isSelected ? '#ffffff' : '#F3B85E'};
`;

// 요일 별 텍스트
export const DayText = styled.div`
  width: 18%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1em;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 0.9em;
  }
  /*background-color: orange;*/
`;

// 요일 별 아이콘
export const DayIcon = styled.img`
  width: 3em;
  height: 3em;
  
  /*background-color: green;*/
`;

// 요일 별 온도 박스
export const DayTempBox = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
  /*background-color: red;*/
`;

// 요일 별 최저 온도
export const DayMin = styled.div`
  font-size: 0.8em;

  /*background-color: aqua;*/
`;

// 요일 별 최고 온도
export const DayMax = styled.div`
  font-size: 0.8em;

  /*background-color: skyblue;*/
`;