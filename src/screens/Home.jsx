import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
const Home = () => {
    return (
        <div className=''>
            <div> <NavBar /> </div>
            <div><Carousel /></div>
            <div className='m-3'><Card/></div>
            <div> <Footer /> </div>
        </div>
    )
}

export default Home
