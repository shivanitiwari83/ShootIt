const { Schema , model } = require('../connection');

//here we are defining the structure of model


const myschema = new Schema({
    username :{type : String},
    email : String,
    password : String,
    age : Number,
    isAdmin: {type : Boolean, default:false },
    avatar : String
});

//here we are creating model 
module.exports = model('users', myschema);

