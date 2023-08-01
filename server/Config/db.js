import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        const conns = await mongoose.connect(process.env.DB_MONGO)
        console.log(`Connected to Mongodb ${conns.connection.host}`);

    }catch (err){
        console.log(`Error in Mongodb ${err}`)
    }
}


export default connectDb;