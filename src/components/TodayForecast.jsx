// TodayForecast.jsx
import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import ThreeHour from './ThreeHour';
import { useNavigate } from 'react-router-dom';

const TodayForecast = () => {
  const { atmos } = useContext(WeatherContext);
  const navigate = useNavigate()
  
  // Function to convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

  return (
    <>
     <div className='w-full lg:h-[20%] xsm:h-[13%] flex justify-center items-center text-2xl xsm:text-[1.5em]'>
    <h1 className='xsm:text-[2.3rem]'>Today's Forecast</h1>
  </div>
    <div className='w-full p-2 lg:h-[80%] xsm:h-[87%] lg:grid-cols-3 xsm:grid xsm:grid-cols-2 xsm:justify-items-center'>
   
      {atmos ? (
        <>
          {atmos.list.slice(0, 5).map((forecast, index) => (
            <ThreeHour 
              key={index}
              icon={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
              temp={`${kelvinToCelsius(forecast.main.temp)}°C`}
              desc={forecast.weather[0].description}
              time={new Date(forecast.dt * 1000).toLocaleTimeString()}
            />
          ))}
          <div 
     className='flex flex-col items-center justify-center p-2 text-white  mx-10 rounded-lg xsm:w-[10rem] xsm:h-[10rem] '>
       <h1 onClick={()=> navigate('/5days')}><i class="ri-arrow-right-circle-fill text-[3rem]"></i></h1>
     </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
       
    </div>
    </>
  );
};

export default TodayForecast;
