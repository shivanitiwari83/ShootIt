const mongoose = require('mongoose');

const db = 'ShootIt';
const dbUrl = `mongodb+srv://shivanitiwari:apstidi@cluster0.8v72vgy.mongodb.net/${db}?retryWrites=true&w=majority`

// Asynchronus vs Synchronus 
//Asynchronus function - returns promise 
mongoose.connect(dbUrl)
.then((result) => {
    console.log('database connected');
     
})
.catch((err) => {
    console.log(err);    
});


module.exports = mongoose;


