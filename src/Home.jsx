import React from 'react'
import Navbar from './components/navbar';
import {Link} from 'react-router-dom';


const Home = () => {

  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-main-section'>
        <div>
          <Link to="/BookListing">Go to Book Listing Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Home