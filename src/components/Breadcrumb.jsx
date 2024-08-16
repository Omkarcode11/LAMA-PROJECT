import React from 'react'
import home from './../assets/home.svg'
import notification from './../assets/notification.svg'
import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <>
    <div className='flex content-center'>
       <Link to={'/'}>
        <img src={home}/> 
       </Link>
       / Sample Project / Description
    </div>
    <div>
     <img src={notification} width={30}/>
    </div>
    </>
  )
}

export default Breadcrumb