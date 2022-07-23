import React from 'react'
import Amazingsh from '../Components/Amazingsh'
import Discover from '../Components/Discover'
import Latestnews from '../Components/Latestnews'
import Restaurantcards from '../Components/Restaurantcards'
import Slider from '../Components/Slider'
import Yummy from '../Components/Yummy'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Restaurantcards/>
      <Latestnews/>
      <Yummy/>
      <Discover/>
      <Amazingsh/>
    </div>
  )
}

export default Home