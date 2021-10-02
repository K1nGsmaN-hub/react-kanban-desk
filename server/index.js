require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const URLS = require('./api/urls');
const userRoutes = require('./api/routes/user.routes');
const tableRoutes = require('./api/routes/table.route');
const columnRoutes = require('./api/routes/column.route');
const taskRoutes = require('./api/routes/task.route');

const app = express();
const { BACK_PORT, DB_URI } = process.env;
const PORT = parseInt(BACK_PORT, 10) || 3001;

mongoose.connect(
    DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error) => {
        if (error) throw error;

        console.log('Database is connected');
    }
);

app.use(cors());
app.use(express.json());

app.use(URLS.USERS, userRoutes);
app.use(URLS.TABLES, tableRoutes);
app.use(URLS.COLUMNS, columnRoutes);
app.use(URLS.TASKS, taskRoutes);

app.listen(PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`> Ready on http://localhost:${PORT}`);
});
