import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layers/Navbar'

function Main() {
  return (
    <div className="flex justify-center w-full">
            <div className="w-full h-full">
                <Navbar className="" />
                <div className="flex ">
                    <Outlet />
                </div>
            </div>
    </div>
  )
}

export default Main