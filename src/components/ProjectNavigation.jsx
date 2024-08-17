import React from 'react'
import LeftSideBar from './LeftSideBar'
import Breadcrumb from './Breadcrumb'
import { Outlet } from 'react-router-dom'

function ProjectNavigation() {
  return (
    <div className='flex justify-between bg-slate-100'>
    <LeftSideBar/>
    <div className='w-full px-8 py-12'>
    <div  className='flex justify-between  '>
    <Breadcrumb/>
    </div>
    <Outlet/>
    </div>
    </div>
  )
}

export default ProjectNavigation