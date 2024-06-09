const mongoose = require("mongoose")

const post = mongoose.model('post',{
    title: {type:string},
    content: {type:string}
})

module.exports = post