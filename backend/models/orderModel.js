const { Schema , model, Types } = require('../connection');

//here we are defining the structure of model


const myschema = new Schema({
    equipment :{type : Types.ObjectId, ref : 'equipments' },
    user :{type : Types.ObjectId, ref : 'users' },
    createdAt : Date,
    paymentInfo : Object,
    address: String,
    type: String,
});

//here we are creating model 
module.exports = model('orders', myschema);