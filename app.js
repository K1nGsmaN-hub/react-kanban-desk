require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./api/todos.model');

const app = express();
const todosRouter = express.Router();
const { DB_URI } = process.env;
const PORT = parseInt(process.env.BACK_PORT, 10) || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, { useNewUrlParser: true }, (error) => {
    if (error) throw error;

    console.log('Database is connected');
});

todosRouter.route('/').get((req, res) => {
    // eslint-disable-next-line array-callback-return
    Todo.find((err, todos) => {
        if (err) throw err;

        res.json(todos);
    });
});

todosRouter.route('/add').post((req, res) => {
    const newTodo = new Todo(req.body);

    newTodo
        .save()
        .then((todo) => {
            res.status(200).json(`todo successfully added: ${todo}`);
        })
        .catch((err) => {
            res.status(400).send(`adding new todo failed: ${err}`);
        });
});

app.use('/todos', todosRouter);

app.listen(PORT, (error) => {
    if (error) throw new Error(error);

    console.log(`> Ready on http://localhost:${PORT}/`);
});
