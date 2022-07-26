const { request } = require('express');
const exercise = require('./exerciseController');
const plan = require('./planController');
const user = require('./userController');

module.exports = { exercise, plan, user };
