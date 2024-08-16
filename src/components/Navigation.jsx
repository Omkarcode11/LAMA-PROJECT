import React from 'react'
import logo from './../assets/logo.svg'
import setting from './../assets/setting.svg'
import notification from './../assets/notification.svg'
import { Outlet } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <header className='flex justify-between p-6'>
     <div>
     <img src={logo} />
     </div>
     <div className='flex gap-3'>
    <img src={setting}/>
    <img src={notification}/>
     </div>
    </header>
    <Outlet/>
    </>

  )
}

export default Navigation