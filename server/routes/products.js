/*
* products Route
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const products = require('../controllers/products');

module.exports = [
    { method: 'GET', path: '/products', config: products.findAll },
    { method: 'GET', path: '/products/{productsId}', config: products.find },
    { method: 'POST', path: '/products', config: products.create },
    { method: 'PUT', path: '/products/{productsId}', config: products.update },
    { method: 'DELETE', path: '/products/{productsId}', config: products.destroy }
];