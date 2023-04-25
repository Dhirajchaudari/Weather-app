import './App.css';
import { CurrentWeather } from './components/current-weather/current-weather';
import { Search } from './components/search/search';
import { WEATHER_API_URL , WEATHER_API_KEY } from './api';
import { useState } from 'react';
import { Forecast } from './components/forecast/forecast';

function App() {

  const [ currentWeather , setCurrentWeather] = useState(null);
  const [ foreCast , setForeCast] = useState(null)

  const hangleOnChange = (searchData) =>{
    const [ lattitude , longitude] = searchData.value.split(" ")
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lattitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lattitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`); // units for temp in celcius

    Promise.all([currentWeatherFetch, foreCastFetch])
    .then(async (resp)=>{
      const weatherResp = await resp[0].json(); // resp[0] = currentWeatherFetch =>( return value );
      const forecastResp = await resp[1].json() // resp[1] = foreCastFetch => (return value) ;

      setCurrentWeather({ city: searchData.label, ...weatherResp});
      setForeCast({ city: searchData.label, ...forecastResp});
    })
    .catch((error)=> console.error(error))

  }
  // console.log(currentWeather);
  // console.log(foreCast)

  return (
    <div className="container">
    <Search onSearchChange={hangleOnChange}/>
    { currentWeather && <CurrentWeather data={currentWeather}/> }
    { foreCast && <Forecast  data={foreCast} />}    
    </div>
  );
}

export default App;
