import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './BestsellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import MyFooter from '../components/MyFooter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavoriteBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home