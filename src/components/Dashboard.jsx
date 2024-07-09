import React from 'react'
import Nav from './Nav'
import Right from './Right'

const Dashboard = () => {
  return (
    <div className='w-full font-poppins flex xsm:flex-col sm:flex-row lg:flex-row'>
        <Nav />
        <Right />
    </div>
  )
}

export default Dashboard