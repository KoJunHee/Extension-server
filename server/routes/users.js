/*
* users Route
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const users = require('../controllers/users');

module.exports = [
    { method: 'GET', path: '/users', config: users.findAll },
    { method: 'GET', path: '/users/{usersId}', config: users.find },
    { method: 'POST', path: '/users', config: users.create },
    { method: 'PUT', path: '/users/{usersId}', config: users.update },
    { method: 'DELETE', path: '/users/{usersId}', config: users.destroy }
];