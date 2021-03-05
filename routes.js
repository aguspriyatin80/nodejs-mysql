'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/mahasiswa')
    .get(jsonku.mahasiswaAll);

    app.route('/mahasiswa/:id')
    .get(jsonku.mahasiswaById);

    app.route('/mahasiswa')
    .post(jsonku.Create);

}