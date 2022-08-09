import React from 'react';
import { 
  MainPart,
} from './Main';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';
import WeatherStylingBox from '../../components/WeatherStylingBox/WeatherStylingBox.jsx';
import Cloth from '../../components/Cloth/Cloth.jsx';

function Main() {
  return (
    <>
      <MainPart>
        <Advertisement />
        <WeatherStylingBox />
        <Cloth />
      </MainPart>
    </>
  );
}

export default Main;