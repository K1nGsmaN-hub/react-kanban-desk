const { ColumnModel } = require('../models');

/** Main route /api/columns */

/** postColumn
 *  @desc Create new column
 *  @route /
 */

const postColumn = (req, res) => {
    const newColumn = new ColumnModel(req.body);

    newColumn
        .save()
        .then((column) =>
            res.status(201).json(`Column successfully added ${column}`)
        )
        .catch((err) => res.status(400).send(`Adding column is failed ${err}`));
};

/** getColumnsByUserID
 *  @desc Get columns by table id
 *  @route /?table_id=[String]
 */

const getColumnsByUserID = (req, res) => {
    const { table_id: tableID } = req.query;

    if (!tableID) throw new Error('Expected the get query "table_id"');

    ColumnModel.find({ tableID })
        .then((columns) => res.json(columns))
        .catch((err) => res.status(404).send(`Table not found: ${err}`));
};

/** patchColumnByID
 *  @desc Edit column by id
 *  @route /:column_id
 */

const patchColumnByID = (req, res) => {
    const {
        params: { column_id: columnID },
        body,
    } = req;

    ColumnModel.findByIdAndUpdate(columnID, body, { new: true })
        .then((column) =>
            res.json(`Column [${columnID}] successfully updated: ${column}`)
        )
        .catch((err) => res.status(404).send(err));
};

/** deleteColumnByID
 *  @desc Delete column by id
 *  @route /:column_id
 */

const deleteColumnByID = (req, res) => {
    const { column_id: columnID } = req.params;

    ColumnModel.findByIdAndDelete(columnID)
        .then((column) =>
            res.json(`Column [${columnID}] successfully deleted: ${column}`)
        )
        .catch((err) =>
            res.status(404).send(`Column [${columnID}] not found ${err}`)
        );
};

exports.postColumn = postColumn;
exports.getColumnsByUserID = getColumnsByUserID;
exports.patchColumnByID = patchColumnByID;
exports.deleteColumnByID = deleteColumnByID;
