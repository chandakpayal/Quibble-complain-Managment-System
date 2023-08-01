import userComplain from '../Modal/Complain.js'


export const registerComplain = async (req,res)=>{
    try{

        const {name,subject,branch,complain} = req.body;

        if(!name){
            return res.send({message:"Name is require"})
        }
        if(!subject){
            return res.send({message:"subject is require"})
        }
        if(!branch){
            return res.send({message:"branch is require"})
        }
        if(!complain){
            return res.send({message:"complain is require"})
        }


        const complains = await new userComplain({name,subject,branch,complain}).save()
        res.status(201).send(
            complains
        )





    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:`error in complain`,
            err
        })
    }
}


export const GetAll = async (req,res)=>{
  try{
    const complain = await userComplain.find({})
    res.status(200).send(
        complain
    )
  }catch(err){
    console.log(err)
    res.status(500).send({
        success:false,
        message:`error in finding`,
        err
    })
}

}


export const GetSingelInfoById = async (req,res)=>{
    try{

        const complain = await userComplain.findById(req.params.id)

        res.status(200).send(
            complain
        )

    }catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }
}



export const DeleteComplain = async (req,res)=>{
    try{

        const user = await userComplain.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(500).send(
                {
                    success:false,
                    message:"Complain Not Found"
                }
            )
        }


        res.status(200).send({
            message:"Complain Deleted"
        })

    }catch (err){
        res.status(500).send({
            success:false,
            err
        })
    }
}



export const EditComplain = async (req,res) =>{
  
     let user = await userComplain.findById(req.params.id);

    user = await userComplain.findByIdAndUpdate(req.params.id, req.body,{new:true,useFindAndModify:true,runValidator:true})
    if(!user){
        return res.status(500).send(
            {
                success:false,
                message:"Complain Not Found"
            }
        )
    }

    res.status(200).send(
        user
    )
   
}