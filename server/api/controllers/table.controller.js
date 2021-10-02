const { TableModel } = require('../models');

/** Main route /api/tables */

/** postTable
 *  @desc Create new table
 *  @route /
 */

const postTable = (req, res) => {
    const newTable = new TableModel(req.body);

    newTable
        .save()
        .then((table) =>
            res.status(201).json(`Table successfully added ${table}`)
        )
        .catch((err) => res.status(400).send(`Adding table is failed ${err}`));
};

/** getTablesByUserID
 *  @desc Get tables by user id
 *  @route /?user_id=[String]
 */

const getTablesByUserID = (req, res) => {
    const { user_id: userID } = req.query;

    if (!userID) throw new Error('Expected the get query "user_id"');

    TableModel.find({ userID })
        .then((tables) => res.json(tables))
        .catch((err) => res.status(404).send(`User not found: ${err}`));
};

/** patchTableByID
 *  @desc Edit table by id
 *  @route /:table_id
 */

const patchTableByID = (req, res) => {
    const {
        params: { table_id: tableID },
        body,
    } = req;

    TableModel.findByIdAndUpdate(tableID, body, { new: true })
        .then((table) =>
            res.json(`Table [${tableID}] successfully updated: ${table}`)
        )
        .catch((err) => res.status(404).send(err));
};

/** deleteTableByID
 *  @desc Delete table by id
 *  @route /:table_id
 */

const deleteTableByID = (req, res) => {
    const { table_id: tableID } = req.params;

    TableModel.findByIdAndDelete(tableID)
        .then((table) =>
            res.json(`Table [${tableID}] successfully deleted: ${table}`)
        )
        .catch((err) =>
            res.status(404).send(`Table [${tableID}] not found ${err}`)
        );
};

exports.postTable = postTable;
exports.getTablesByUserID = getTablesByUserID;
exports.patchTableByID = patchTableByID;
exports.deleteTableByID = deleteTableByID;
