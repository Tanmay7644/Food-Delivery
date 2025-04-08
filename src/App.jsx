import { useState } from 'react'
import './App.css'
import Home from './screens/Home'
import Login from './components/Login'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './components/Signup.jsx'
import {ContextReducer} from './components/ContextReducer.jsx'
import MyOrder from './components/MyOrder.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextReducer>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createUser" element={<Signup/>} />
        <Route path="/myOrder" element={<MyOrder/>}></Route>
      </Routes>
    </Router>
    </ContextReducer>
  )
}

export default App
