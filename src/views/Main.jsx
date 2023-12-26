import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layers/Navbar'
import Sidebar from '../components/layers/SideBar'

function Main() {
  return (
    <div className="flex justify-center w-full bg-[#04074A]">
            <div className="my-1 ml-1 w-1/5 h-[100vh]">
                <Sidebar />
            </div>
            <div className="w-4/5 h-full ml-2">
                <Navbar className="w-full" />
                <div className="flex ">
                    {/* <Outlet /> */}
                </div>
            </div>
    </div>
  )
}

export default Main