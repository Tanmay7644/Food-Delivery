import React from 'react'
import './Signup.css';
const Signup = () => {
    
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label for="name" className='form-label'>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='form-label'>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className='form-label'>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
