const { request } = require('express');
const exercise = require('./exerciseController');
const plan = require('./planController');
const user = require('./userController');
const exerciseLogger = require('./exerciselog');

module.exports = { exercise, plan, user, exerciseLogger };
