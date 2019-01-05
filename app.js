const express = require('express');
const morgan = require('morgan');   // muestra todas las peticiones que se realizan a los servicios
const engine = require('ejs-mate');   //para que muestre las paginas web
const app = express();



//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));      // para recibir datos desde el cliente html

//ROUTES
const service = require('./routes/api/v1.0/services')


//setting
app.engine('ejs', engine);
app.set('view engine', 'ejs')


//service
app.use('/', service)

//listen
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})