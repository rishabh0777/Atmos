import React from 'react'

const Daily = ({icon, temp, date, desc}) => {
  return (
    <>
     <div className='w-[15rem] h-[15rem]  flex flex-col items-center justify-center p-2 text-white  mx-10 rounded-lg' > 
      <img 
      src={icon}  
      className='w-[5rem]'
      alt="" />
      <h1>{temp}</h1>
      <p>{desc}</p>
      <p>{date}</p>
        </div>
    </>
  )
}

export default Daily