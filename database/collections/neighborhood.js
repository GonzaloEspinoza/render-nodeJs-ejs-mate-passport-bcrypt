'use strict'


const momgoose = require('mongoose');
const Schema = momgoose.Schema;

const neighboorhood = Schema ({
    country: String,
    city: String,
    neighboorhood: String
});

module.exports = momgoose.model('vecindario',neighboorhood)
