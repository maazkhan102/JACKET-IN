import React from 'react'
import NewArrival from '../Components/NewArrival'
import ProductCard from '../Components/ProductCard'
import Slider from '../Components/Slider'
import Title from '../Components/Title'
import TopTrending from '../Components/TopTrending'
const Home = () => {
  return (
    <div>
      <Slider/>


 {/* Top Trending section */}
      <div>
        <Title title1='Top Trending'/>
        <TopTrending/>

      </div>
 {/* Top Trending section */}


{/* New Arrival section */}
<div>
  <Title title1='New Arrival'/>
  <NewArrival/>
</div>
{/* New Arrival section */}
 
    </div>
  )
}

export default Home
