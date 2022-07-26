const { request } = require('express');
const exercise = require('./exerciseController');
const plan = require('./planController');

module.exports = { exercise, plan };
