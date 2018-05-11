/*
* orders Controller
* Created by junhee on 2018.05.11..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const Boom = require('boom'),
    Joi = require('joi'),
    Co = require('co');

exports.findAll = {
    description: '전체 조회',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {
        // 전체 조회
        Orders.find()
            .exec((err, orders) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(orders);
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
            ordersId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 조회
        Orders.findOne({ id: request.params.ordersId })
            .exec((err, orders) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(orders);
            });
    }
};

/***********************************************************************
 *                              -  주문서 등록
 * TODO : 트렌젝션 처리
 * 
 * 1. 구매자가 주문
 * 2. proct status를 판매완료로
*************************************************************************/
exports.create = {
    description: '생성',
    notes: ' ',
    tags: ['api'],
    validate: {
        payload: {
            productId: Joi.string().required().description("상품 아이디"),
            buyerId: Joi.string().required("구매자 아이디")
        }
    },
    auth: false,
    handler: (request, reply) => {
        Co(function* () {

            try {

                //상품 상태 변경
                var product = yield Products.findOne({ id: request.payload.productId });
                product.status = "판매완료";
                product.save();

                //주문서 등록
                var order = yield Orders.create(request.payload);
                return order;
            }
            catch (err) {
                throw err;
            }
        }).then(function (result) {
            reply(result);
        }).catch(function (err) {
            return reply(Boom.badImplementation(err));
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
            ordersId: Joi.string().required()
        },
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 수정
        Orders.update({ id: request.params.ordersId }, request.payload)
            .exec((err, orders) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(orders[0]);
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
            ordersId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 삭제
        Orders.destroy({ id: request.params.ordersId })
            .exec((err) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply({ result: true });
            });
    }
};