import React from 'react'
import LeftSideBar from './LeftSideBar'
import Breadcrumb from './Breadcrumb'
import { Outlet } from 'react-router-dom'

function ProjectNavigation() {
  return (
    <div className='flex justify-between'>
    <LeftSideBar/>
    <div className='w-full'>
    <div  className='flex justify-between px-8 py-12 '>
    <Breadcrumb/>
    </div>
    <Outlet/>
    </div>
    </div>
  )
}

export default ProjectNavigation