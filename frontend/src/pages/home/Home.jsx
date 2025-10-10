import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommend from './Recommend'
import News from './News'

const Home = () => {
  return (
    <div>
        <Banner />
        <TopSellers />
        <Recommend />
        <News />
    </div>
  )
}

export default Home