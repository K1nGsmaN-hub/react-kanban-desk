const { Schema, model } = require('mongoose');
const { ColumnSchema } = require('./column.model');
const { TaskStatusSchema } = require('./task-status.model');

const TableSchema = new Schema({
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
    columns: [ColumnSchema],
    taskStatuses: [TaskStatusSchema],
});

exports.TableSchema = TableSchema;
module.exports = model('Table', TableSchema);
