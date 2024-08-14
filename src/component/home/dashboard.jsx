import React from 'react'
import Header from '../../shared/header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
      <Header />
      <Outlet />
    </div>
  )
}

export default Dashboard
