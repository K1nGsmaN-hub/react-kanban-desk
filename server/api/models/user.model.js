const { Schema, model } = require('mongoose');
const { TableSchema } = require('./table.model');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    tables: [TableSchema],
});

module.exports = model('User', UserSchema);
