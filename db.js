const mongoose = require('mongoose')

mongoose.set('strict', true)
mongoose.connect('mongodb://localhost:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).catch((err)=> console.log('conection is not established'+ err))

module.exports = mongoose