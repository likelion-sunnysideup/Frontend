import styled from 'styled-components';

/** Week.js */
export const SidebarPart = styled.div`
  width: 23%;
  height: 90vh;

  /*background-color: #c9c9c9;*/
`;

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

// 3em * 3em
export const SidebarEmogiBackground = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #586fab;*/
`;

// 30px * 30px
export const SidebarEmogi = styled.img`
  width: 28px;
  height: 28px;
`;

// 13em * 3em
export const SidebarInfoBackground = styled.div`
  width: 13em;
  height: 3em; 
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #f8faff;*/
`;


export const SidebarInfoText = styled.div`
  font-size: 0.9em;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
`;

// 100% * 2em
export const SearchbarContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: black;*/
`;

// 270px * 1.5em
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

// 20px * 20px
export const IconBackground = styled.div`
  width: 20px;
  height: 20px;
  
  /*background-color: #5CAB7D;*/
`;

// 20px * 20px
export const SearchImg = styled.img`
  width: 15px;
  height: 15px;

  cursor: pointer;
`;

// 16em * 1.2em
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

// 100% * 10em
export const SidebarTodayWeatherContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #5CAB7D;*/
`;

// 200px * 10px (임시로 넣어 놓음)
export const SidebarTodayWeather = styled.div`
  width: 76%;
  height: 84%;
  border: 2px dashed #f3b85e;
  border-radius: 6px;
`;

// 100% * 20em
export const WeekWeatherContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: #3F4B3B;*/
`;

// 200px * 20px (임시로 넣어 놓음)
export const WeekWeather = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 6px;

  background-color: #f3b85e;
`;