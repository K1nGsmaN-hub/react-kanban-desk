const { Schema } = require('mongoose');

const TaskStatusSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

exports.TaskStatusSchema = TaskStatusSchema;
