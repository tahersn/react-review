import React from 'react'
import { useNavigate } from 'react-router-dom'
import logout from '../../assets/logout.svg'

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-12 bg-[#04074A] flex  relative items-center">
      <div className='flex float-end absolute right-2 items-center '>
        <div className='flex row justify-between items-center'>
          <div className='rounded-full bg-green-600 h-2 w-2 pr-2 '></div>
          <div className='text-white text-center px-2'>Online</div>
        </div>
        <div>
          <img src={logout} alt="" />
      </div>

      </div>
  
</div>
  )
}

export default Navbar