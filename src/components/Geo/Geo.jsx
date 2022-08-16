import React, { usestate } from 'react';
// 현재 위치 API
//import axios from 'axios';
//import useGeolocation from 'react-hook-geolocation';

//const geolocation = useGeolocation();
//const latitude = geolocation.latitude;
//const longitude = geolocation.longitude;
//const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//const [cityName, setCityName] = useState();

/*
const getCity = async() => {
  await axios
  .get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
  .then((res) => {
    console.log(res.data);
    setCityName(res.data[0].local_names.ko);
  })
  .catch((error)=> {
    console.log("==========getCity==========");
    console.log(error);
  })
};
*/

function Geo(props) {
  return (
    <div></div>
  );
}

export default Geo;