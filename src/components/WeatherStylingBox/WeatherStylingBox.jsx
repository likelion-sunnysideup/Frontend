import React, { useState } from 'react';
import { 
  RecommendContainer,
  TimeBackground,
  OutBackground,
  InBackground,
  TextBox,
  OutTimeBox,
  InTimeBox,
  StyleCheckBackground,
  StyleCheckBtn,
  MainTodayWeatherContainer,
  MainTodayWeatherBackground,
  MainIconContainer,
  MainIconBox,
  MainIconImg,
  MainInfoContainer,
  MainDayCityBox,
  MainTemperatureBox,
  MainStateBox,
  MainRainfallBox,
  StyleBackground,
  StyleImgBox,
  StyleImg,
  StyleTextBox,
  StyleText,
  CustomReactDatePicker,
} from './WeatherStylingBox';
import 'react-datepicker/dist/react-datepicker.css';
import './WeatherStylingBox.scss';

import sunImg from '../../styles/assets/sun.png'
import topImg from '../../styles/assets/top.png'
import bottomImg from '../../styles/assets/bottom.png'
import shoesImg from '../../styles/assets/shoes.png'

// mock-data
const stylingText = {
  text: `오늘은 햇볕이 강하고 기온이 높아
  반팔 블라우스 혹은 반팔과 반바지를 추천해요
  샌들이나 플립플랍을 신는 것도 더위를 피하는 방법일 것 같아요`
};

function WeatherStylingBox(props) {
  const [showStyle, setShowStyle] = useState(false);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const filterPassedTime = (time) => {
    const currentTime = new Date();
    const selectedTime = new Date(time);

    return currentTime.getTime() < selectedTime.getTime();
  };

  return (
    <>
  {/** 초단기예보 & 코디 추천 박스 */}
      <RecommendContainer>                  
          <TimeBackground>

            <OutBackground>
              <TextBox>외출 시작 시간</TextBox>
                <OutTimeBox>  
                  <CustomReactDatePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={60}
                    timeCaption='Time'
                    dateFormat='aa h:mm'
                    placeholderText='선택'
                    filterTime={filterPassedTime}
                  />
                </OutTimeBox>
            </OutBackground>
          
            <InBackground>
              <TextBox>외출 끝 시간</TextBox>
                <InTimeBox>
                  <CustomReactDatePicker
                    selected={endTime}
                    onChange={(time) => setEndTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={60}
                    timeCaption='Time'
                    dateFormat='aa h:mm'
                    placeholderText='선택'
                    filterTime={filterPassedTime}
                />
                </InTimeBox>
            </InBackground>
            
            <StyleCheckBackground>
              <StyleCheckBtn onClick={() => {setShowStyle(!showStyle)}}>추천 코디 확인하기</StyleCheckBtn>  
            </StyleCheckBackground>

            <MainTodayWeatherContainer>
              <MainTodayWeatherBackground>

                <MainIconContainer>
                  <MainIconBox>
                    <MainIconImg src={sunImg}/>
                  </MainIconBox>
                </MainIconContainer>

                <MainInfoContainer>
                  <MainDayCityBox></MainDayCityBox>
                  <MainTemperatureBox></MainTemperatureBox>
                  <MainStateBox></MainStateBox>
                  <MainRainfallBox></MainRainfallBox>
                </MainInfoContainer>

              </MainTodayWeatherBackground>
            </MainTodayWeatherContainer>
          </TimeBackground>

          <StyleBackground>
          { showStyle ? (
            <>
              <StyleImgBox>
                <StyleImg src={topImg}></StyleImg>
                <StyleImg src={bottomImg}></StyleImg>
                <StyleImg src={shoesImg}></StyleImg>
              </StyleImgBox>
              <StyleTextBox>
                <StyleText>{stylingText.text}</StyleText>
              </StyleTextBox>
            </>
          ) : (
            <StyleTextBox>
              <StyleText>오늘의 추천 코디를 확인해보세요!</StyleText>
            </StyleTextBox>
          )}
          </StyleBackground>

        </RecommendContainer>
    </>
  );
}

export default WeatherStylingBox;