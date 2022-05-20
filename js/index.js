const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({extended: false}))

app.use(require('./script'))

app.use(express.static('C:/xampp/htdocs/dashboard'));

app.listen(80, () => {
    console.log('Server en puerto 80')
})