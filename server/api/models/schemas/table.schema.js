const { Schema } = require('mongoose');
const { TaskStatusSchema } = require('./task-status.schema');

const TableSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    taskStatuses: [TaskStatusSchema],
});

module.exports = TableSchema;
