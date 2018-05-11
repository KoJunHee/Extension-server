/*
* products Model
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'products',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        sellerId: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        contents: {
            type: 'string',
            required: true
        },
        price: {
            type: 'integer',
            required: true
        },
        count: {
            type: 'integer',
            required: true
        },
        status: {
            type: 'string',
            required: true,
            defaultsTo: "판매중"
        },
        url: {
            type: 'string',
            required: true
        }
    }

};
