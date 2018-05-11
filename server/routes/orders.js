/*
* orders Route
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const orders = require('../controllers/orders');

module.exports = [
    { method: 'GET', path: '/orders', config: orders.findAll },
    { method: 'GET', path: '/orders/{ordersId}', config: orders.find },
    { method: 'POST', path: '/orders', config: orders.create },
    { method: 'PUT', path: '/orders/{ordersId}', config: orders.update },
    { method: 'DELETE', path: '/orders/{ordersId}', config: orders.destroy }
];