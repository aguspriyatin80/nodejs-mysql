'use strict'; // menggunakan mode ketat javascript

exports.ok = function(value, res){
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
}

