// 날씨 사이드 바
import React from 'react';
import { 
  SidebarPart,
  SidebarHeaderContatiner,
  SidebarEmogiBackground,
  SidebarEmogi,
  SidebarInfoBackground,
  SidebarInfoText,
  SearchbarContainer,
  SearchbarBackground,
  IconBackground,
  SearchImg,
  LocationInput,
  SidebarTodayWeatherContainer,
  SidebarTodayWeather,
  WeekWeatherContainer,
  WeekWeather,
} from './Week';

import sunImage from '../../styles/assets/sun.png'
import searchImage from  '../../styles/assets/search.png'

function Week(props) {
  return (
    <>
      <SidebarPart>
  
        <SidebarHeaderContatiner>
          <SidebarEmogiBackground>
              <SidebarEmogi src={sunImage} />
          </SidebarEmogiBackground>
          
          <SidebarInfoBackground>
            <SidebarInfoText>
              코디 정보를 확인하고 싶은
              <br/>
              위치와 날씨를 선택해주세요
            </SidebarInfoText>
          </SidebarInfoBackground>
        </SidebarHeaderContatiner>

        <SearchbarContainer>
          <SearchbarBackground>
              <IconBackground>
                <SearchImg src={searchImage}></SearchImg>
              </IconBackground>
              <LocationInput 
                type="text" 
                placeholder="위치 검색" 
              />
          </SearchbarBackground>
        </SearchbarContainer>

        <SidebarTodayWeatherContainer>
          <SidebarTodayWeather></SidebarTodayWeather>
        </SidebarTodayWeatherContainer>

        <WeekWeatherContainer>
          <WeekWeather></WeekWeather>
        </WeekWeatherContainer>

      </SidebarPart>
    </>
  );
}

export default Week;