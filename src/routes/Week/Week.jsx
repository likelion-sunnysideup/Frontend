// 날씨 사이드 바
import React, { useState, useEffect } from 'react';
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
  SidebarTodayWeatherBackground,
  CurrentCity,
  CurrentTemp,
  CurrentState,
  CurrentTempBox,
  CurrentMax,
  CurrentMin,
  WeekWeatherContainer,
  WeekWeatherBackground,
  DayWeatherBox,
  DayText,
  DayIcon,
  DayTempBox,
  DayMin,
  DayMax,
} from './Week';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';

import sunImage from '../../styles/assets/sun.png'
import searchImage from  '../../styles/assets/search.png'

const weatherData = [
  {
    id: 0,
    day: 'SUN'
  },
  {
    id: 1,
    day: 'MON'
  },
  {
    id: 2,
    day: 'TUE'
  },
  {
    id: 3,
    day: 'WEN'
  },
  {
    id: 4,
    day: 'THU'
  },
  {
    id: 5,
    day: 'FRI'
  },
  {
    id: 6,
    day: 'SAT'
  },
]

function Week(props) {
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // 요일 관리
  const [selected, setSelected] = useState();
  const onSelectedDay = (selected) => {
    setSelected(selected); 
  };

  // 날씨 관리
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [cityName, setCityName] = useState();
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [current, setCurrent] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [daily, setDaily] = useState([]);

  const geolocation = useGeolocation();
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;

  const getWeather = async() => {
    await axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`)
    .then((result) => {
      console.log(result.data);
      setWeatherInfo(result.data);
      setCurrent(result.data.current);
      setCurrentWeather(result.data.current.weather[0]);
      setDaily(result.data.daily[0]);
      setLoading(false);
    })
    .catch((error)=> {
      console.log("==========getWeather==========");
      console.log(error);
    })
  };

  const getCity = async() => {
    await axios
    .get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then((result) => {
      console.log(result.data);
      setCityName(result.data[0].local_names.ko);
    })
    .catch((error)=> {
      console.log("==========getCity==========");
      console.log(error);
    })
  };

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
                <SearchImg 
                  onClick={() => {
                    getWeather();   
                    getCity();
                  }}
                  src={searchImage}
                ></SearchImg>
              </IconBackground>
              <LocationInput 
                placeholder="위치 검색"
                onChange={onSearch}
                value={search}
              />
          </SearchbarBackground>
        </SearchbarContainer>
        <SidebarTodayWeatherContainer>
          <SidebarTodayWeatherBackground>
          { loading ? (
            null
          ) : (
            <>
              <CurrentCity>{cityName}</CurrentCity>
              <CurrentTemp>{current.temp}℃</CurrentTemp>
              <CurrentState>{currentWeather.description}</CurrentState>
            </>
          )}
            <CurrentTempBox>
              <CurrentMax></CurrentMax>
              <CurrentMin></CurrentMin>
            </CurrentTempBox>
          </SidebarTodayWeatherBackground>
        </SidebarTodayWeatherContainer>

        <WeekWeatherContainer>
          <WeekWeatherBackground>
              { weatherData.map((element) => (
                <DayWeatherBox 
                  key={element?.id} 
                  onClick={() => onSelectedDay(element?.id)}
                  isSelected={element?.id === selected}
                >
                  <DayText>{element?.day}</DayText>
                  <DayIcon></DayIcon>
                  <DayTempBox>
                    <DayMin></DayMin>
                    <DayMax></DayMax>
                  </DayTempBox>
                </DayWeatherBox>
              ))}
          </WeekWeatherBackground>
        </WeekWeatherContainer>

      </SidebarPart>
    </>
  );
}

export default Week;