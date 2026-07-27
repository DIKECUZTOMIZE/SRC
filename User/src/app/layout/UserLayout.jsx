import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const UserLayout = () => {
  return  <>
  <Navbar/>
  <Outlet/>
  </>
}

export default UserLayout