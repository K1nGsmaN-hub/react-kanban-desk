require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const { BACK_PORT, DB_URI } = process.env;
const PORT = parseInt(BACK_PORT, 10) || 3001;

mongoose.connect(
    DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error) throw error;

        console.log('Database is connected');
    }
);

app.use(cors());
app.use(express.json());

app.listen(PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`> Ready on http://localhost:${PORT}`);
});
