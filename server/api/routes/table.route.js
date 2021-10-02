const { Router } = require('express');
const {
    postTable,
    getTablesByUserID,
    deleteTableByID,
    patchTableByID,
} = require('../controllers/table.controller');

const router = Router();

router.route('/').get(getTablesByUserID);
router.route('/').post(postTable);

router.route('/:table_id').patch(patchTableByID);
router.route('/:table_id').delete(deleteTableByID);

module.exports = router;
