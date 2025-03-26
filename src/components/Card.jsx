import React from 'react'
import Burger from '../assets/Card Images/burger.jpeg'
const Card = () => {
  return (
    <div>
      <div className="card mt-3 " style={{ "width": "18rem","maxHeight":"360px"}}>
                <img className="card-img-top" src={Burger} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Write your Text Here</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6),(e,i)=>{
                                return (
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>Total Price</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card
