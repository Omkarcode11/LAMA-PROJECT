import React from 'react'
import youtube from './../assets/youtube.svg'
import UploadCard from '../components/UploadCard'
import rss from './../assets/RSS.svg'
import upload from './../assets/upload.svg'
import FileUploadCard from '../components/FileUploadCard'
import AllEpisodes from '../components/AllEpisodes'


function AddPodCast() {
  return (
    <div className=''>
        <h1 className='text-3xl font-bold text-black'>Add Podcast</h1>
        <div className='flex flex-wrap justify-between py-4'>
        <UploadCard svg={youtube} text={"Youtube Video"}/>
        <UploadCard svg={rss} text={"RSS Feed"}/>
        <UploadCard svg={upload} text={"Youtube Video"}/>
        </div>
        <div>
          {/* <FileUploadCard/> */}
          <AllEpisodes/>
        </div>
    </div>
  )
}

export default AddPodCast