const { Router } = require('express');
const {
    postColumn,
    deleteColumnByID,
    getColumnsByUserID,
    patchColumnByID,
} = require('../controllers/column.controller');

const router = Router();

router.route('/').post(postColumn);
router.route('/').get(getColumnsByUserID);

router.route('/:column_id').patch(patchColumnByID);
router.route('/:column_id').delete(deleteColumnByID);

module.exports = router;
