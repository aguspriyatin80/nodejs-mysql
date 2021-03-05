const express = require('express'); // memanggil library expressjs
const bodyParser = require('body-parser'); // memanggil library body-parser
const app = express(); // memanggil express secara global

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

//menentukan port
app.listen(3000, () => {
    console.log(`Server started on port`);
});
