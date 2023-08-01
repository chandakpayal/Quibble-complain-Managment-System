import express from 'express'
import { DeleteComplain, EditComplain, GetAll, GetSingelInfoById, registerComplain } from '../Controller/authComplain.js'


const router = express.Router();



//register complain

router.post('/complain',registerComplain)


//get all complain

router.get('/allcomplain',GetAll)


//get complain by id

router.get('/complainId/:id',GetSingelInfoById)


//delete complain by id

router.delete('/delete/:id',DeleteComplain)


//upadte the complain

router.put('/edit/:id',EditComplain)

export default router;