import React, { createContext, useContext, useEffect, useState } from "react";
import { InputContext } from "./InputContext";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { loc } = useContext(InputContext);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const key = "d0eeecec5e72ebaf1bee70cf6a3be1b8";
        const GeoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=${key}`;

        const response = await fetch(GeoApi);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const city = await response.json();
        if (city.length > 0) {
          setCityData(city[0]);
        } else {
          console.log("No location data found.");
          setCityData(null);  // Clear city data if no location found
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (loc) {
      fetchLocation();
    } else {
      setCityData(null);  // Clear city data if loc is empty
    }
  }, [loc]);

  return (
    <LocationContext.Provider value={{ cityData }}>
      {children}
    </LocationContext.Provider>
  );
};
