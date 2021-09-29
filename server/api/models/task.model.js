const { Schema, model } = require('mongoose');
const { TaskStatusSchema } = require('./task-status.model');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: TaskStatusSchema,
});

exports.TaskSchema = TaskSchema;
module.exports = model('Task', TaskSchema);
