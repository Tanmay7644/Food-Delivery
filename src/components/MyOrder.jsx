import React, { useState, useEffect } from 'react';

const MyOrder = () => {
    const [orderData, setorderData] = useState(null);

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        try {
            const res = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            const response = await res.json();
            setorderData(response);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {orderData?.orderData?.order_data?.flat().slice(0).reverse().map((arrayData, index) => {
                    return (
                        <div key={index}>
                            {arrayData.order_date ? (
                                <div className='m-auto mt-5'>
                                    <h5>{arrayData.order_date}</h5>
                                    <hr />
                                </div>
                            ) : (
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{arrayData.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{arrayData.quantity}</span>
                                                <span className='m-1'>{arrayData.size}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    ₹{arrayData.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyOrder;