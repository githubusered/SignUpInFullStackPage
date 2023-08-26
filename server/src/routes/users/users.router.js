const express = require('express');
const { httpGetAllUsers, httpAddNewUser,
    //  httpDeleteUser,
      httpLoginUser } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/users', httpGetAllUsers);
usersRouter.post('/users', httpAddNewUser);
// usersRouter.delete('/users/:id', httpDeleteUser);
usersRouter.post('/login', httpLoginUser);

module.exports = usersRouter;
