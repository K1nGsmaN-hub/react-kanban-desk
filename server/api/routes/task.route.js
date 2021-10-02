const { Router } = require('express');
const {
    postTask,
    getTasksByUserID,
    deleteTaskByID,
    getTaskByID,
    patchTaskByID,
} = require('../controllers/task.controller');

const router = Router();

router.route('/').post(postTask);
router.route('/').get(getTasksByUserID);

router.route('/:task_id').get(getTaskByID);
router.route('/:task_id').patch(patchTaskByID);
router.route('/:task_id').delete(deleteTaskByID);

module.exports = router;
