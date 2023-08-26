const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users/users.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use(usersRouter)


module.exports  = app;