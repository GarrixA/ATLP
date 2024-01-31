const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: String,
    name: String
})

module.exports = mongoose.model('Post', schema)