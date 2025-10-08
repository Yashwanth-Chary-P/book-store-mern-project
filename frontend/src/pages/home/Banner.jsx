import React from 'react'
import BannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex md:flex-row-reverse flex-col justify-between items-center gap-12 py-16'>

        {/* Banner Section */}
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={BannerImg} alt="" />
        </div>


        {/* Content Section */}
        <div className='md:w-1/2 w-full'>
            <h1 className='font-secondary md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='btn-primary'>Subscribe</button>
        </div>
    </div>
  )
}

export default Banner