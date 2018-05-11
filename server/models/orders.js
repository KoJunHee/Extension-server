/*
* orders Model
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'orders',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        productId: {
            type: 'string',
            required: true
        },
        buyerId: {
            type: 'string',
            required: true
        }
    }
};
