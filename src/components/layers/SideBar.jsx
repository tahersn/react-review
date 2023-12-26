import React from 'react'

function SideBar() {


  return (
    <div className='w-full h-full px-4 py-8  bg-gradient-to-b from-slate-200 flex items-center justify-center flex-col'>
        <div className="text-blue-950">Home</div>
        <div className="text-blue-950">Orders</div>
        <div className="text-blue-950">Categories</div>
        <div className="text-blue-950">Products</div>
        <div className="text-blue-950">Users</div>      
    </div>
  )
}

export default SideBar