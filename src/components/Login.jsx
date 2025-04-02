import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [details, setDetails] = useState({ email: '', password: '' });
  let navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      if (!response.ok) throw new Error("Server Error");

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        alert("Login Successful!");
        localStorage.setItem("authToken",data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } else {
        alert("Login Failed. Check your details.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='container1'>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='form-label'>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={details.email} onChange={onchange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='form-label' >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={onchange} value={details.password} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Login


