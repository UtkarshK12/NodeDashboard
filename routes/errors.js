const express = require('express');
const router=express.Router();
const Error = require('../models/Error');
const bodyParser=require('body-parser');


router.get('/', async(req,res)=>{
    try{
        const errors= await Error.find();
        res.json(errors);
    }
    catch(err){
        console.log({message: err})
    }
});

router.post('/', async (req,res)=>{

    const error = new Error({
        errorName: req.body.errorName,
        errorLocation: req.body.errorLocation,
        errorMessage: req.body.errorMessage,
        errorBody: req.body.errorBody
    });

    try{
        const savedErrors=await error.save();
        res.save(savedErrors);
        console.log("savedErrors")
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports=router;