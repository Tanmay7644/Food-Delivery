import express from 'express'
import mongoose from 'mongoose'
import {foodItem} from './models/Schema.js'
const app = express()
const port = 5000
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/FoodDelivery")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

  
app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})