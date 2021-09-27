const mongoose = require('mongoose');

const { Schema } = mongoose;

const Todo = new Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    descr: {
        type: String,
    },
});

module.exports = mongoose.model('Todo', Todo);
