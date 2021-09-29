const { Schema, model } = require('mongoose');
const { TaskSchema } = require('./task.model');

const ColumnSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    tasks: [TaskSchema],
});

exports.ColumnSchema = ColumnSchema;
module.exports = model('Column', ColumnSchema);
