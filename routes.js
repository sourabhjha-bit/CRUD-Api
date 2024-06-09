const express = require('express')
const router = express.Router()

const mongotype = require('mongoose').Types

const post = require('../backend/models/post')
const post = require('../backend/models/post')


//routes define here

//get all data from this api

router.get('/',(req,res)=>{
    post.find((err,doc)=>{
        if (err){
            console.log('error occurs while fetching data', +err)
            res.status(400).send('internal error', err)
        }else{
            res.send(doc)
        }
    })
})

//create new post

router.post('/',(req,res)=>{
    let post = new post({
    title : req.body.title,
    content : req.body.content,
    username : req.body.username 
})
    post.save((err,doc)=>{
        if(err){
            console.log('error occurs while fetching data', +err)
            res.status(400).send('internal error', err)
        }else{
            res.send(doc)
        }
    })
})

//get data by id

router.get('/:id',(req,res)=>{
    if(mongotype.ObjectId.isValid(req.params.id)){
        post.findById(req.params.id, (err, doc)=>{
            if(err){
                console.log('error occurs while fetching data', +err)
                res.status(400).send('internal error', err)
            }else{
                res.send(doc)
            }
        })
    }else{
        res.status(400).send('no record found by this id:', id)
    }
})

//delete

router.delete('/:id',(req,res)=>{
    if(mongotype.ObjectId.isValid(req.params.id)){
        post.findByIdAndDelete(req.params.id, (err, doc)=>{
            if(err){
                console.log('error occurs while fetching data', +err)
                res.status(400).send('internal error', err)
            }else{
                res.send(doc)
            }
        })
    }else{
        res.status(400).send('no record found by this id', id)
    }
})

//update by id

router.put('/:id',(req,res)=>{
    let post = {
        title : req.body.title,
        content : req.body.content,
        username : req.body.username 
    }
    if(mongotype.ObjectId.isValid(req.params.id)){
        post.findByIdAndDelete(req.params.id,{$set:post},{new:true}, (err, doc)=>{
            if(err){
                console.log('error occurs while fetching data', +err)
                res.status(400).send('internal error', err)
            }else{
                res.send(doc)
            }
        })
    }else{
        res.status(400).send('no record found by this id', id)
    }
})

module.exports = router;