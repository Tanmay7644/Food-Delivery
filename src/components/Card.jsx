import React, { useState,useContext,useRef,useEffect } from 'react'
import Burger from '../assets/Card Images/burger.jpeg'
import { useDispatchCart,useCart } from './ContextReducer';
const Card = (props) => {
    let dispatch=useDispatchCart();
    let options = props.options;
    let data=useCart();
    const priceRef=useRef();
    let priceOptions = Object.keys(options);
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState("");
    const handleAddToCart= async()=>{
        let food=[]

        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item;
                break;
            }
        }

        if(food!=[]){
            if(food.size===size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,quantity:quantity});
                return ;
            }
            else if(food.size!==size ){
                await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name,price:finalPrice,quantity:quantity,size:size,img:props.foodItem.img});
                return;
            }
            return;
        }
        await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name,price:finalPrice,quantity:quantity,size:size,img:props.foodItem.img});
        console.log(data);
    }
    
    let finalPrice = quantity * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])
    return (
        <div>
            <div className="card mt-3 " style={{ "width": "18rem","height":"auto" }}>
                <img className="card-img-top " style={{height:"150px", objectFit:"fill"}} src={props.foodItem.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.description}</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQuantity(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return (
                                    <option value={data} key={data}>{data}</option>
                                )
                            })}
                        </select>

                        <div className='d-inline h-100 fs-5'>{finalPrice}/-</div>
                    </div>
                    <hr></hr>
                    <div className='btn bg-success  ms-2'  onClick={handleAddToCart}>Add To Cart</div>
                </div>

            </div>
        </div>
    )
}

export default Card
