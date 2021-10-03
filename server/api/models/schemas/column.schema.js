const { Schema } = require('mongoose');

const ColumnSchema = new Schema({
    tableID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

module.exports = ColumnSchema;
