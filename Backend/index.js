import express from 'express'
import connectDB from './db.js'
import createUser from './Routes/CreateUser.js'

const app = express()
const port = 5000
app.use(express.json()) // this is used to parse the json data from the request body

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',createUser);
// from this endpoint is localHost:5000/api/createuser
// this endpoint is used to create user in the database


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})