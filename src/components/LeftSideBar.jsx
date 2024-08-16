import React from 'react'
import logo from './../assets/logo.svg'
import Pile from './Pile'
import setting from './../assets/setting2.svg'

function LeftSideBar() {
  return (
    <div className='h-screen bg-primaryLight w-[30%] flex flex-col justify-between'>
      <div>
      <img src={logo}/>
      <p  className='text-[#49454F] font-bold px-4 pt-4 pb-2'>Podcast Upload Flow</p>
      <div className='px-2 border border-b-gray-400'>
        <Pile selected={true} i={1} text='Projects'/>
        <Pile selected={false} i={2} text='Widget Config'/>
        <Pile selected={false} i={3} text='Deployment'/>
        <Pile selected={false} i={4} text='Pricing'/>
      </div>
      </div>
      <div className='flex items-center gap-2 border border-t-gray-400'>
        <img src={setting}/> Settings
      </div>
    </div>
  )
}

export default LeftSideBar