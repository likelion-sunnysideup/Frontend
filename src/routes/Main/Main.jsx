import React, { useState, useEffect, useReducer } from 'react';
import { 
  MainPart,
} from './Main';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';
import WeatherStylingBox from '../../components/WeatherStylingBox/WeatherStylingBox.jsx';
import Cloth from '../../components/Cloth/Cloth.jsx';

function Main({ lat, lon, addressName }) {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [whether, setWhether] = useState(null);

  return (
    <>
      <MainPart>
        <Advertisement />
        <WeatherStylingBox lat={lat} lon={lon} addressName={addressName} setMainPageWhether={setWhether}/>
        <Cloth whether={whether}/>
      </MainPart>
    </>
  );
}

export default Main;