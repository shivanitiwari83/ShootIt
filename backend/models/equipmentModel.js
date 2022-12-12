const { Schema , model } = require('../connection');

//here we are defining the structure of model


const myschema = new Schema({
    title :String,
    description : String,
    category : String,
    price : Number,
    rentPrice : Number,
    image : String,
    createdAt: Date
});

//here we are creating model 
module.exports = model('equipments', myschema);