import { useContext, useState } from "react";
import { InputContext } from "../contexts/InputContext";
import { WeatherContext } from "../contexts/WeatherContext";

const Nav = () => {
  const { loc, setLoc } = useContext(InputContext);
  const { atmos } = useContext(WeatherContext);
  const [time, setTime] = useState("")
  
  setInterval(()=>{
    const date = new Date()
    const currTime = date.toLocaleTimeString()
    setTime(currTime)
  },1000)

  const getPlaceText = (e) => {
    let placeText = e.target.value;
    let words = placeText.split(' ');
    if (words.length > 0 && words[0]) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    placeText = words.join(' ');
    console.log(placeText);
    setLoc(placeText);
  };

  return (
    <div className='xsm:w-full xsm:h-screen lg:h-screen lg:w-[28%] bg-[#141821] text-white flex flex-col items-center shadow-2xl shadow-black justify-center'>
      <h1 className='xsm:text-[5rem] xsm:mt-2 text-[5rem] mt-5 font-poppins font-extrabold text-[#fff]  selection:bg-[#555] selection:text-white'>ATMOS</h1>

      <form className="flex justify-center items-center w-full">
        <input
          className='w-[20vw] h-[7vh] xsm:w-[65%] xsm:h-[5vh] xsm:mt-4 rounded-lg outline-none px-3 mt-4 text-black shadow-black shadow-sm '
          type="text"
          placeholder="Enter your city"
          value={loc}
          onChange={getPlaceText}
        />
      </form>

      {atmos ? (
        <>
          <img 
            className="mt-5 w-[5rem] xsm:mt-6 xsm:w-[7rem]"
            src={`https://openweathermap.org/img/wn/${atmos.list[0].weather[0].icon}@2x.png`} 
            alt="" 
          />
          <p className="mt-2 text-[3.5rem] xsm:text-[3rem] xsm:mt-1">{Math.round(atmos.list[0].main.temp - 273.15)}°C</p>
          <p className=" text-[0.9em] xsm:text-xl">{atmos.list[0].weather[0].description}</p>
          <p className="mt-6 text-[1em] xsm:text-l">{new Date(atmos.list[0].dt * 1000).toLocaleDateString()}</p>
          <p className=" text-[1em] ">{time}</p>
          
          <h1 className="text-[1.2rem] mt-5 w-[80%] text-center text-bolder xsm:text-2xl">{atmos.city.name}, {atmos.city.country}</h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Nav;
