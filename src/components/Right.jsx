// src/components/Right.jsx
import React from 'react';
import TodayForecast from './TodayForecast';
import FiveDaysForecast from './FiveDaysForecast';
import { Routes, Route, Navigate } from 'react-router-dom';

const Right = () => {
  return (
    <div className='lg:w-[72%] lg:h-screen bg-[#ccc] text-black xsm:w-full xsm:h-screen'>
      <Routes>
        <Route path='/today' element={<TodayForecast />} />
        <Route path='/5days' element={<FiveDaysForecast />} />
        <Route path='/*' element={<Navigate to='/today' replace />} />
      </Routes>
    </div>
  );
};

export default Right;
