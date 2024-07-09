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
     <div className='w-full h-[10%] flex justify-center items-center text-2xl'>
    <h1>Today's Forecast</h1>
  </div>
    <div className='w-full p-2 h-[90%] flex flex-wrap xsm:grid xsm:grid-cols-2'>
   
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
     className='w-[15rem] h-[15rem] flex flex-col items-center justify-center p-2 text-white  mx-10 rounded-lg xsm:w-[10rem] xsm:h-[10rem]'>
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
