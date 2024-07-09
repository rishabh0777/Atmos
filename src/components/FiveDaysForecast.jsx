// FiveDaysForecast.jsx
import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import Daily from './Daily';
import { useNavigate } from 'react-router-dom';

const FiveDaysForecast = () => {
  const { atmos } = useContext(WeatherContext);
  const navigate = useNavigate()

  
  
  // Function to convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

  // Get the daily forecast by selecting one forecast per day, e.g., the forecast at noon
  const getDailyForecast = (list) => {
    const dailyForecasts = [];
    const seenDates = new Set();

    list.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000).getDate();

      // Check if this date is already in the set
      if (!seenDates.has(date)) {
        seenDates.add(date);
        dailyForecasts.push(forecast);
      }
    });

    return dailyForecasts;
  };

  return (
    <>
   <div className='w-full h-[10%] flex justify-center items-center text-2xl text-white'>
    <h1>Five Day's Forecast</h1>
  </div>
    <div className='w-full p-2 h-[90%] flex flex-wrap'>
   
      {atmos ? (
        <>
         <div 
     
     className='w-[15rem] h-[15rem]  flex flex-col items-center justify-center p-2 text-white  mx-10 rounded-lg'>
       <h1 onClick={()=> navigate('/today')}><i class="ri-arrow-left-circle-fill text-[3rem]"></i></h1>
     </div>
          {getDailyForecast(atmos.list).slice(0, 5).map((forecast, index) => (
            <Daily 
              key={index}
              icon={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
              temp={`${kelvinToCelsius(forecast.main.temp)}°C`}
              desc={forecast.weather[0].description}
              date={new Date(forecast.dt * 1000).toLocaleDateString()}
            />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
    </>
  );
};

export default FiveDaysForecast;
