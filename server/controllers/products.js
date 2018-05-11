/*
* products Controller
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
        Products.find()
            .exec((err, products) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(products);
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
            productsId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 조회
        Products.findOne({id: request.params.productsId})
            .exec((err, products) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(products);
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
            sellerId: Joi.string().required().description("판매자 아이디"),
            title: Joi.string().required().description("제목"),
            contents: Joi.string().required().description("내용"),
            price: Joi.number().required().description("가격"),
            count: Joi.number().required().description("개수"),
            url: Joi.string().required().description("URL")
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 생성
        Products.create(request.payload)
            .exec((err, products) => {
                // 결과
                if (err) {
                    console.log(err);
                    return reply(Boom.badImplementation(err));
                }
                reply(products);
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
            productsId: Joi.string().required()
        },
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 수정
        Products.update({id: request.params.productsId}, request.payload)
            .exec((err, products) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(products[0]);
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
            productsId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 삭제
        Products.destroy({id: request.params.productsId})
            .exec((err) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply({result: true});
            });
    }
};