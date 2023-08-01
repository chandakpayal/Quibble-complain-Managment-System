import express from "express";
import dotenv from 'dotenv'
import connectDb from './Config/db.js'
import authUser from './Routes/authUser.js';
import authComplain from './Routes/authComplain.js'
import cors from 'cors'

dotenv.config();


//databse
connectDb()


const app = express()


//middleware
app.use(cors())
app.use(express.json())



//routes
app.use('/api/v1',authUser)
app.use('/api/v1',authComplain)



const PORT = process.env.PORT || 8080


app.listen(PORT ,()=>{
    console.log(`Server IS Running ON ${PORT}`)
})