//Express
const express = require('express');
const app = require('./server');
const fs = require('fs');
//Morgan
const morgan = require('morgan');
const path = require('path');
//Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
//CORS
const cors = require('cors');
//Helmet
const helmet = require('helmet');



//════════════ Routes ════════════

const actorsRoutes  = require('./routes/actors.routes');
const directorsRoutes  = require('./routes/directors.routes');


//═════════ Middlewares ══════════
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(morgan('combined', {stream: accessLogStream}));


app.use("/api/v1", actorsRoutes, directorsRoutes);


//═════════ Eror List ═════════════════
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'),{flags: 'a'});
/* Create file to write the error*/

//═════════ Middlewares-Error ═════════

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}
  

module.exports = app;

