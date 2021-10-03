const { TaskModel } = require('../models');

/** Main route /api/users/:user_id/tables/:table_id/tasks/:task_id/tasks */

/** postTask
 *  @desc Create new task
 *  @route /
 */

const postTask = (req, res) => {
    const newTask = new TaskModel(req.body);

    newTask
        .save()
        .then((task) => res.status(201).json(`Task successfully added ${task}`))
        .catch((err) => res.status(400).send(`Adding task is failed ${err}`));
};

/** getTasksByUserID
 *  @desc Get tasks by table id
 *  @route /?table_id=[String]
 */

const getTasksByUserID = (req, res) => {
    const { table_id: tableID } = req.query;

    if (!tableID) throw new Error('Expected the get query "table_id"');

    TaskModel.find({ tableID })
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(404).send(`Table not found: ${err}`));
};

/** getTaskByID
 *  @desc Get task by id
 *  @route /:task_id
 */

const getTaskByID = (req, res) => {
    const { task_id: taskID } = req.params;

    TaskModel.findById(taskID)
        .then((task) => res.json(task))
        .catch((err) =>
            res.status(404).send(`Task [${taskID}] not found: ${err}`)
        );
};

/** patchTaskByID
 *  @desc Edit task by id
 *  @route /:task_id
 */

const patchTaskByID = (req, res) => {
    const {
        params: { task_id: taskID },
        body,
    } = req;

    TaskModel.findByIdAndUpdate(taskID, body, { new: true })
        .then((task) =>
            res.json(`Task [${taskID}] successfully updated: ${task}`)
        )
        .catch((err) => res.status(404).send(err));
};

/** deleteTaskByID
 *  @desc Delete task by id
 *  @route /:task_id
 */

const deleteTaskByID = (req, res) => {
    const { task_id: taskID } = req.params;

    TaskModel.findByIdAndDelete(taskID)
        .then((task) =>
            res.json(`Task [${taskID}] successfully deleted: ${task}`)
        )
        .catch((err) =>
            res.status(404).send(`Task [${taskID}] not found ${err}`)
        );
};

exports.postTask = postTask;
exports.getTasksByUserID = getTasksByUserID;
exports.getTaskByID = getTaskByID;
exports.patchTaskByID = patchTaskByID;
exports.deleteTaskByID = deleteTaskByID;
