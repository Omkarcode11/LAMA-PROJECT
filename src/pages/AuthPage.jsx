import React from 'react'

import { Outlet } from 'react-router-dom'

function AuthPage() {
  return (
    <div className='flex'>
      <div className='w-[70%]' >
      <img src='/src/assets/image.png' className='w-full h-screen bg-primary'/>
      </div>
      <div className='w-[30%] my-10'>
      <Outlet/>
      </div>
    </div>
  )
}

export default AuthPage