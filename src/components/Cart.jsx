import React from 'react'
import { useCart,useDispatchCart } from './ContextReducer.jsx'
import trash from 'D:/Web Development/Projects/Food Delivery App/src/assets/trash.svg'
const Cart = () => {
    let data=useCart();
    let dispatch=useDispatchCart();
    console.log(data);
    if(data.length===0){
        return(
            <div className='m-5 w-100 text-center fs-3' style={{color:"white"}}>The Cart is Empty!</div>
        )
    }
    let totalPrice=data.reduce((total,food)=>total+food.price,0);

    const handleCheckout=async()=>{
        let userEmail=localStorage.getItem("userEmail")

        let response =await fetch("http://localhost:5000/api/orderData",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authToken":localStorage.getItem("authToken")
            },
            body:JSON.stringify({
                order_data:data,
                email:userEmail,
                order_date:new Date().toDateString()
            })
        });

        if(response.status===200){
            dispatch({type:"DROP"});
        }
    }
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
            <thead className='text-success fs-4 '>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Option</th>
                    <th scope='col'>Amount</th>
                </tr>
            </thead>

            <tbody className='text-success fs-5'>
                
                {data.map((food,index)=>{
                    return(
                    <tr>
                        <th scope='row'>{index+1}</th>
                        <td>{food.name}</td>
                        <td>{food.quantity}</td>
                        <td>{food.size}</td>
                        <td>{food.price}</td>
                        
                        <td> <button type='button' className='btn p-0'><img src={trash} alt="delete" onClick={()=>dispatch({type:"REMOVE",index:index})}/></button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div><button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button></div>
      </div>
    </div>
  )
}

export default Cart
