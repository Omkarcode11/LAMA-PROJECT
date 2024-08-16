import React from 'react'
import LeftSideBar from './LeftSideBar'
import Breadcrumb from './Breadcrumb'

function ProjectNavigation() {
  return (
    <div className='flex justify-between'>
    <LeftSideBar/>
    <Breadcrumb/>
    </div>
  )
}

export default ProjectNavigation