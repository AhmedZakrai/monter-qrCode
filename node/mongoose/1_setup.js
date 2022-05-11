//  to install
npm install mongoose --save

// to importing
const mongoose = require('mongoose')

// to conect dataBaise
mongoose.conect('mongodb://localhost:27017/dataName')

// *****************  to create model  ***********
//  first: create schema
const songeSchema = new mongoose.Schema({name:String,price:Number})

//  scaned: create model
const Songe = mongoose.model('keki',kekiSchema)
// ************************************************

//  create new copy 
const keki = new Songe({name:kike,price:12})