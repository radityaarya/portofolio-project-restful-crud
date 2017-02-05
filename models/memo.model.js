"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var memosSchema = new Schema({
  memo: { type: String, required: true}
},
{
  timestamps : true
})

var Memos = mongoose.model('Memos', memosSchema)

module.exports = Memos;
