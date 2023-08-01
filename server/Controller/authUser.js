import userSchema from '../Modal/userModal.js'
import userComplain from '../Modal/Complain.js'

export const registerUser = async (req,res)=>{
    try{

        const {name,email,password,role} = req.body;

        if(!name){
            return res.send({message:"Name is require"})
        }
        if(!email){
            return res.send({message:"email is require"})
        }
        if(!password){
            return res.send({message:"pass is require"})
        }
        if(!role){
            return res.send({message:"role is require"})
        }


        const user = await userSchema.findOne({email})

        if(user){
            return res.status(500).send({
                success:false,
                message:"User already exist please login"
            })
        }

        const users = await new userSchema({name,email,password,role}).save()
        res.status(201).send(
            users
        )





    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:`error in register`,
            err
        })
    }
}



//login

var userCerdients = new Object ()

export const LoginPage = async (req,res)=>{
    try{

        const {email,password} = req.body;
        
        if(!email || !password){
                return res.status(404).send({
                    success:false,
                    message:"Invalid email or password"
                })
        }

        const user = await userSchema.findOne({email,password})

        userCerdients = user


        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found"
            })
        }

        res.status(200).send(
            user
        )




    }catch (err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:`error in login`,
            err
        })
    }
}




export const singleInfo = async (req,res)=>{
    try{
       res.status(200).send(
            userCerdients
       )

    }catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }
}



// match name from userSchema and userComplain

export const SingleComplain = async (req,res)=>{
     
    try{
        const user = await userComplain.find({name: userCerdients.name})
        res.status(200).send(
           user
        )
    }catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }

}