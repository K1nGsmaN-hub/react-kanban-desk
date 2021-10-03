const { model } = require('mongoose');
const {
    ColumnSchema,
    TableSchema,
    TaskSchema,
    UserSchema,
} = require('./schemas');

exports.ColumnModel = model('Column', ColumnSchema);
exports.TableModel = model('Table', TableSchema);
exports.TaskModel = model('Task', TaskSchema);
exports.UserModel = model('User', UserSchema);
