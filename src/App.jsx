import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalPart, CenterPart, BarPart } from './styles/css/styledComponents';
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
} from '../src/routes/Week/Week.js';
import Header from './routes/Header/Header.jsx';
import Main from './routes/Main/Main.jsx';
import Post from './routes/Post/Post.jsx';
import ShowPost from './components/ShowPost/ShowPost.jsx';
import Save from './routes/Save/Save.jsx';
import Account from './routes/Account/Account.jsx';
import ScrollUp from './components/ScrollUp/ScrollUp.jsx';
import Login from './routes/Login/Login.jsx';
import axios from 'axios';

import sunImage from '../src/styles/assets/sun.png'
import searchImage from  '../src/styles/assets/search.png'

const today = new Date();
let day1 = new Date(today).toDateString().slice(0, 4);
let day2 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);
let day3 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);
let day4 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);
let day5 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);
let day6 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);
let day7 = new Date(today.setDate(today.getDate() + 1)).toDateString().slice(0, 4);

const base_url = 'https://port-0-backend-5faq24l6klj7k3.gksl1.cloudtype.app';

const weekData = [
  {
    id: 0,
    day: day1,
  },
  {
    id: 1,
    day: day2,
  },
  {
    id: 2,
    day: day3,
  },
  {
    id: 3,
    day: day4,
  },
  {
    id: 4,
    day: day5,
  },
  {
    id: 5,
    day: day6,
  },
  {
    id: 6,
    day: day7,
  },
]

function App(props) {
  // 로딩 관리
  const [loading, setLoading] = useState(true);

  // 검색 관리
  const [search, setSearch] = useState('');
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // 요일 관리
  const [selected, setSelected] = useState();
  const onSelectedDay = (selected) => {
    setSelected(selected); 
  };

  // 주소 관리
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [addressName, setAddressName] = useState();

  const getAddress = async() => {
    await axios
    .get(`https://dapi.kakao.com/v2/local/search/address.json?query=${search}`,
    {
      headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}`, },
    },
    )
    .then((response) => {
      console.log(response.data);
      setLat(response.data.documents[0].y);
      setLon(response.data.documents[0].x);
      setAddressName(response.data.documents[0].address_name);
    })
    .catch((error) =>{
      console.log("============================getAddress============================")
      console.log(error);
    })
  }

  // 날씨 관리
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [currentWeather, setCurrentWeather] = useState([]);
  const [daily, setDaily] = useState([]);
  const [temp, setTemp] = useState([]);
  
  const getWeather = async() => {
    await axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`)
    .then((res) => {
      console.log(res.data);
      setTemp(res.data.current.temp);
      setDaily(res.data.daily);
      setCurrentWeather(res.data.current.weather[0]);
      setLoading(false);
    })
    .catch((error)=> {
      console.log("============================getWeather============================");
      console.log(error);
    })
  };

  const [login, setLogin] = useState(false);

  return (
        <GlobalPart>
        { login ? (
          <>
            <Header/>
            <CenterPart>
              <SidebarPart>
                <SidebarHeaderContatiner>
                  <SidebarEmogiBackground>
                      <SidebarEmogi src={sunImage}/>
                  </SidebarEmogiBackground>
                  
                  <SidebarInfoBackground>
                    <SidebarInfoText>
                      코디 정보를 확인하고 싶은
                      <br/>
                      위치와 요일을 선택해주세요
                    </SidebarInfoText>
                  </SidebarInfoBackground>
                </SidebarHeaderContatiner>

                <SearchbarContainer>
                  <SearchbarBackground>
                      <IconBackground>
                        <SearchImg 
                          onClick={() => {
                            getAddress();
                            getWeather();   
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
                      <CurrentCity>{addressName}</CurrentCity>
                      <CurrentTemp>{temp}℃</CurrentTemp>
                      <CurrentState>{currentWeather.description}</CurrentState>
                    <CurrentTempBox>
                      <CurrentMin>최저 {daily[0].temp.min}℃</CurrentMin>
                      <CurrentMax>최고 {daily[0].temp.max}℃</CurrentMax>
                    </CurrentTempBox>
                    </>
                  )}
                  </SidebarTodayWeatherBackground>
                </SidebarTodayWeatherContainer>

                <WeekWeatherContainer>
                  <WeekWeatherBackground>
                  { loading ? (
                    null
                  ) : (
                    <>
                      { weekData.map((e) => (
                        <DayWeatherBox 
                          key={e?.id} 
                          onClick={() => {
                            onSelectedDay(e?.id);   
                          }}
                          isSelected={e?.id === selected}
                        >
                          <DayText>{e?.day}</DayText>
                          <DayIcon src={`http://openweathermap.org/img/wn/${daily[e?.id].weather[0].icon}@2x.png`}/>
                          <DayTempBox>
                            <DayMin>최저 {daily[e?.id].temp.min}℃</DayMin>
                            <DayMax>최고 {daily[e?.id].temp.max}℃</DayMax>
                          </DayTempBox>
                        </DayWeatherBox>
                      ))}
                      </>
                    )}
                  </WeekWeatherBackground>
                </WeekWeatherContainer>
              </SidebarPart>
              <BarPart/>
              <Routes>
                <Route exact path="/" element={<Main lat={lat} lon={lon} addressName={addressName} temp={temp}/>}></Route> {/** 메인 화면 */}
                <Route path="/post" element={<Post />}></Route> {/** 포스트 생성 로직 */}
                <Route path="/cloth/:id" element={<ShowPost />}></Route> {/** 포스트 하나의 데이터 */}
                <Route path="/save" element={<Save />}></Route> {/** (타계정) 포스트 (저장) 리스트 */}
                <Route path="/account" element={<Account />}></Route> {/** (나만의 것) 포스트 (저장) 리스트 */}
              </Routes>
              <ScrollUp />
            </CenterPart>
          </>
          ):(
            <>
              <Login></Login>
            </>
          )}
        </GlobalPart>
  );
}

export default App;