// src/components/Right.jsx
import React from 'react';
import TodayForecast from './TodayForecast';
import FiveDaysForecast from './FiveDaysForecast';
import { Routes, Route, Navigate } from 'react-router-dom';

const Right = () => {
  return (
    <div className='w-[72%] h-screen bg-[#1b0951] text-white xsm:w-full xsm:h-screen'>
      <Routes>
        <Route path='/today' element={<TodayForecast />} />
        <Route path='/5days' element={<FiveDaysForecast />} />
        <Route path='/*' element={<Navigate to='/today' replace />} />
      </Routes>
    </div>
  );
};

export default Right;
