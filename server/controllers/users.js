/*
* users Controller
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const Boom = require('boom'),
    Joi = require('joi');

exports.findAll = {
    description: '전체 조회',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {
        // 전체 조회
        Users.find()
            .exec((err, users) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(users);
        });
    }
};

// find data
exports.find = {
    description: '조회',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            usersId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 조회
        Users.findOne({id: request.params.usersId})
            .exec((err, users) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(users);
        });
    }
};

// create new data
exports.create = {
    description: '생성',
    notes: ' ',
    tags: ['api'],
    validate: {
        payload: {
            name: Joi.string().required().description("유저 아이디")
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 생성
        Users.create(request.payload)
            .exec((err, users) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(users);
        });
    }
};

// update data
exports.update = {
    description: '수정',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            usersId: Joi.string().required()
        },
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 수정
        Users.update({id: request.params.usersId}, request.payload)
            .exec((err, users) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(users[0]);
            });
    }
};

// delete data
exports.destroy = {
    description: '삭제',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            usersId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 삭제
        Users.destroy({id: request.params.usersId})
            .exec((err) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply({result: true});
            });
    }
};