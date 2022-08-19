import React, { useState, useEffect } from 'react';
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
  MainTempBoundBox,
  TempBound,
  MainRainfallBox,
  StyleBackground,
  StyleImgBox,
  StyleImg,
  StyleImgClothes,
  StyleImgShoes,
  StyleTextBox,
  StyleText,
  CustomReactDatePicker,
} from './WeatherStylingBox';
import 'react-datepicker/dist/react-datepicker.css';
import './WeatherStylingBox.scss';
import axios from 'axios';

import sunImg from '../../styles/assets/03d.png'
import topImg from '../../styles/assets/top.png'
import bottomImg from '../../styles/assets/bottom.png'
import shoesImg from '../../styles/assets/shoes.png'

import {
  calcMinuteToMilliSec,
  calcHourToMilliSec,
  calcDayToMilliSec,
  toKrCurTime
} from '../../utils/time'
import getWhetherInfo from '../../utils/WhetherApiParser';

const stylingText = {
  text:
  `
  오늘은 햇볕이 강하고 기온이 높아
  반팔 블라우스 혹은 반팔과 반바지를 추천해요
  샌들이나 플립플랍을 신는 것도 더위를 피하는 방법일 것 같아요
  `
};

function WeatherStylingBox({ lat, lon, addressName, setMainPageWhether }) {
  const [loading, setLoading] = useState(true);

  const [showStyle, setShowStyle] = useState(false);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const filterPassedDate = (time) => {
    const currentTime = new Date();
    const fcstMaximumTime = new Date(currentTime.getTime() + 6 * 24 * 60 * 60 * 1000);
    const selectedTime = new Date(time);

    let isOverToday = parseInt((currentTime.getTime() + (9 * calcHourToMilliSec())) / (24 * 60 * 60 * 1000)) <= parseInt((selectedTime.getTime() + (9 * calcHourToMilliSec())) / (24 * 60 * 60 * 1000));
    let isUnderfcstMaximumDay = parseInt((fcstMaximumTime.getTime() + (9 * calcHourToMilliSec())) / (24 * 60 * 60 * 1000)) >= parseInt((selectedTime.getTime() + (9 * calcHourToMilliSec())) / (24 * 60 * 60 * 1000));
    return isOverToday && isUnderfcstMaximumDay;
  };

  const filterPassedTime = (time) => {
    const currentTime = new Date();
    const selectedTime = new Date(time);
    return currentTime.getTime() < selectedTime.getTime();
  };
  
  // 날씨 관리
  const [whether, setWhether] = useState(null);
  useEffect(() => {
    setMainPageWhether(whether);
  }, [whether])

  const getWeather = () => {
    setWhether(getWhetherInfo(startTime, endTime, lon, lat));
    setLoading(false);
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
                    timeIntervals={60}
                    timeCaption='Time'
                    dateFormat='MM.dd. hh:mmaa'
                    placeholderText='선택'
                    filterDate={filterPassedDate}
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
                    timeIntervals={60}
                    timeCaption='Time'
                    dateFormat='MM.dd. hh:mmaa'
                    placeholderText='선택'
                    filterDate={filterPassedDate}
                    filterTime={filterPassedTime}
                />
                </InTimeBox>
            </InBackground>
            
            <StyleCheckBackground>
              <StyleCheckBtn 
                onClick={() => {
                  getWeather(); 
                  setShowStyle(!showStyle);
                }}>추천 코디 확인하기</StyleCheckBtn>  
            </StyleCheckBackground>


            <MainTodayWeatherContainer>
              <MainTodayWeatherBackground>
                { loading ? (
                  null
                  ):(
                    <MainInfoContainer>
                      <MainDayCityBox>{addressName}</MainDayCityBox>
                      <MainTemperatureBox>{whether.taAvg}℃</MainTemperatureBox>
                      <MainStateBox>{whether.capsule}</MainStateBox>
                      <MainTempBoundBox>
                        <TempBound>최저 {whether.taMin}℃</TempBound>
                        <TempBound>최고 {whether.taMax}℃</TempBound>
                      </MainTempBoundBox>
                    </MainInfoContainer>
                )}
              </MainTodayWeatherBackground>
            </MainTodayWeatherContainer>
          </TimeBackground>

          <StyleBackground>
          { showStyle ? (
            <>
              <StyleImgBox>
                <StyleImgClothes>
                  <StyleImg src={topImg}></StyleImg>
                  <StyleImg src={bottomImg}></StyleImg>
                </StyleImgClothes>
                <StyleImgShoes>
                  <StyleImg src={shoesImg}></StyleImg>
                </StyleImgShoes>
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