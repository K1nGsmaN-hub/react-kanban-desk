const { Schema } = require('mongoose');
const { TaskStatusSchema } = require('./task-status.schema');

const TaskSchema = new Schema({
    tableID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: TaskStatusSchema,
});

module.exports = TaskSchema;
