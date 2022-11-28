const express = require('express');
const router=express.Router();
const Post = require('../models/Post');
const bodyParser=require('body-parser');


router.get('/',(req,res)=>{
    res.send('Posts');
});

router.post('/',(req,res)=>{

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //.save() returns a promise
    post.save()
    .then(data => {
        res.json(data);
        console.log(data);
    })
    .catch(err =>{
        res.json({message: err});
    });
})

module.exports=router;