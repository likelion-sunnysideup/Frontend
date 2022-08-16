import React from 'react';
import { 
  MainPart,
} from './Main';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';
import WeatherStylingBox from '../../components/WeatherStylingBox/WeatherStylingBox.jsx';
import Cloth from '../../components/Cloth/Cloth.jsx';

function Main({ lat, lon, addressName,temp }) {
  return (
    <>
      <MainPart>
        <Advertisement />
        <WeatherStylingBox lat={lat} lon={lon} addressName={addressName} temp={temp}/>
        <Cloth />
      </MainPart>
    </>
  );
}

export default Main;