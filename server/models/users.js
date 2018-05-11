/*
* users Model
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'users',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        name: {
            type: 'string',
            required: true
        }
        // address: {
        //     type: 'string'
        // }
    }
};
