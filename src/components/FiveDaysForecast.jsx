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
   <div className='w-full lg:h-[20%] xsm:h-[13%] flex justify-center items-center text-2xl xsm:text-[1.5em]'>
    <h1 className='xsm:text-[2.3rem]'>Five Day's Forecast</h1>
  </div>
    <div className='w-full p-2 lg:h-[80%] xsm:h-[87%] lg:grid-cols-3 xsm:grid xsm:grid-cols-2 xsm:justify-items-center'>
   
      {atmos ? (
        <>
         <div 
         onClick={()=> navigate('/today')}
     className='flex flex-col items-center justify-evenly text-black bg-white shadow-lg shadow-black px-1 py-4 text-[0.8em] font-bold mx-10 rounded-lg xsm:w-[10rem] xsm:h-[10rem] cursor-pointer'>
      <h2>Three Hour Forecaste</h2>
       <h1><i class="ri-arrow-left-circle-fill mt-10 text-4xl"></i></h1>
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
