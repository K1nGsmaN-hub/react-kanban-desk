const { UserModel } = require('../models');

/** Main route /api/users */

/** postUser
 * @desc Create new user
 * @route [POST] /
 */

const postUser = (req, res) => {
    const newUser = new UserModel(req.body);

    newUser
        .save()
        .then((user) =>
            res.status(201).json(`User successfully added: ${user}`)
        )
        .catch((err) =>
            res.status(400).send(`Adding new user is failed: ${err}`)
        );
};

/** getUserByID
 * @desc Get user by id
 * @route [GET] /:user_id
 */

const getUserByID = (req, res) => {
    const { user_id: userID } = req.params;

    UserModel.findById(userID)
        .then((user) => res.json(user))
        .catch((err) =>
            res.status(404).send(`User [${userID}] not found: ${err}`)
        );
};

/** deleteUserByID
 * @desc Delete user by id
 * @route [DELETE] /:user_id
 */

const deleteUserByID = (req, res) => {
    const { user_id: userID } = req.params;

    UserModel.findByIdAndDelete(userID)
        .then((user) =>
            res.json(`User [${userID}] successfully deleted: ${user}`)
        )
        .catch((err) => res.status(404).send(`User not found: ${err}`));
};

/** patchUserByID
 * @desc Patch user by id
 * @route [PATCH] /:user_id
 */

const patchUserByID = (req, res) => {
    const {
        params: { user_id: userID },
        body,
    } = req;

    UserModel.findByIdAndUpdate(userID, body, { new: true })
        .then((user) =>
            res.json(`User [${userID}] successfully updated: ${user}`)
        )
        .catch((err) => res.status(404).send(err));
};

exports.postUser = postUser;
exports.getUserByID = getUserByID;
exports.deleteUserByID = deleteUserByID;
exports.patchUserByID = patchUserByID;
