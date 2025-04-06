import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useEffect } from 'react'
import { useState } from 'react'
import image1 from '../assets/Carousel Images/image1.jpeg'
import image4 from '../assets/Carousel Images/image2.jpg'      
import image3 from '../assets/Carousel Images/image4.jpg'
const Home = () => {

    const [foodItem, setFoodItem] = React.useState([]);
    const [foodCat, setFoodCat] = React.useState([]);
    const [search,setSearch]=useState("");

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        response = await response.json();
        // console.log(response[0],response[1]);

        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <div className=''>
            <div> <NavBar /> </div>

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption " style={{ zIndex: 5 }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            {/* <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 carousel-image" alt="..." style={{ filter: "brightness(30%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100 carousel-image" alt="..." style={{ filter: "brightness(30%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 carousel-image" alt="..." style={{ filter: "brightness(30%" }} />
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
            <div className='container'>
                {
                    foodCat.length > 0
                        ?
                        foodCat.map((data, index) => {
                            return (
                                <div className='row mb-3' key={index}>

                                    <div key={index} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>

                                    <hr />
                                    {/* now here we want the fooditems belonging to particular category */}

                                    {
                                        foodItem.length > 0
                                            ? foodItem.filter((item) => item.CategoryName == data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                                .map(filterItems => {
                                                    return (
                                                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                            <Card
                                                                foodName={filterItems.name}
                                                                options={filterItems.options[0]}
                                                                imgSrc={filterItems.img}
                                                                description={filterItems.description}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            : <div>No Such Data</div>
                                    }


                                </div>
                            )
                        }) :
                        <div>Loading...</div>
                }
                {/* <Card /> */}
            </div>
            <div> <Footer /> </div>
        </div>
    )
}

export default Home
