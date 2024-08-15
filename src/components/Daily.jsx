import React from 'react'

const Daily = ({icon, temp, date, desc}) => {
  return (
    <>
     <div className='w-[15rem] h-[15rem]  flex flex-col items-center justify-center p-2 text-white  mx-10 rounded-lg xsm:w-[10rem] xsm:h-[10rem] xsm:mx-0 bg-[#252228] shadow-lg shadow-black' > 
      <img 
      src={icon}  
      className='w-[5rem] xsm:w-[4rem]'
      alt="" />
      <h1 className='xsm:text-[1em]'>{temp}</h1>
      <p className='xsm:text-[0.9em]'>{desc}</p>
      <p className='xsm:text-[0.9em]'>{date}</p>
        </div>
    </>
  )
}

export default Daily