import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts/DataContext";
// import { InputContext } from "./InputContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // const {loc} = useContext(InputContext)
  const { cityData } = useContext(LocationContext);
  const [atmos, setAtmos] =  useState(null);

  useEffect(() => {
    const fetchDefWeather = async () => {
      const key = `d0eeecec5e72ebaf1bee70cf6a3be1b8`;
      const api = `https://api.openweathermap.org/data/2.5/forecast?lat=28.6139&lon=77.209&appid=${key}`;

      try {
        console.log('Fetching weather data with URL:', api);

        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const weatherData = await response.json();
        setAtmos(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchWeather = async () => {
      const key = `d0eeecec5e72ebaf1bee70cf6a3be1b8`;
      const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.lat}&lon=${cityData.lon}&appid=${key}`;

      try {
        console.log('Fetching weather data with URL:', api);

        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const weatherData = await response.json();
        setAtmos(weatherData);
        console.log(weatherData);
      } catch (error) {
        console.log(error.message);
      }
    };

    

    if(cityData === '' || cityData === undefined || cityData === null){
      fetchDefWeather();
    }
    else{
      fetchWeather()
    }
  }, [cityData]);

  return (
    <WeatherContext.Provider value={{ atmos }}>
      {children}
    </WeatherContext.Provider>
  );
};
