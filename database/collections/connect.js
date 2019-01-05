'use strict'

const express = require('express')
const mongoose = require('mongoose')



mongoose.connect('mongodb://gonzalo8:gonzalo8@ds111336.mlab.com:11336/inmuebles-database', (err, res) =>{
    if(err) throw err
    console.log('Conexion a la base de datos establecida')
})

module.exports = mongoose
