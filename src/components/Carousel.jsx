import React from 'react'
import image1 from '../assets/Carousel Images/image1.jpeg'
import image4 from '../assets/Carousel Images/image2.jpg'      
import image3 from '../assets/Carousel Images/image4.jpg'
const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption " style={{zIndex:5}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
                    </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
