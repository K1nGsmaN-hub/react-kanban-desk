const { Router } = require('express');
const {
    deleteUserByID,
    getUserByID,
    patchUserByID,
    postUser,
} = require('../controllers/user.controller');

const router = Router();

// router.route('/').get((req, res) => {
//
// });
router.route('/').post(postUser);

router.route('/:user_id').get(getUserByID);
router.route('/:user_id').patch(patchUserByID);
router.route('/:user_id').delete(deleteUserByID);

module.exports = router;
