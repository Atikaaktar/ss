const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async(req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err)
    {
        res.json({message: err});

    }
    //res.send(" I am in posts");
});


router.post('/',async (req,res) =>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description

    });
    try{
    const savedPost = await post.save();

    res.json(savedPost);
    }catch(err){

        res.json({message: err});
    }
   /* post.save()
    .then(data => {
        res.json(data);

    })
    .catch(err => {
        res.json({message: err });


    });*/

});

module.exports = router;