'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi REST API sudah berjalan",res);
}

//menampilkan semua data mahasiswa
exports.mahasiswaAll = function(req, res){
    let sql = "SELECT * FROM mahasiswa";
    connection.query(sql,function(error,rows){
        if(error) {
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}

//menampilkan data mahasiswa berdasarkan id
exports.mahasiswaById = function(req, res){
    let id = req.params.id;
    let sql = "SELECT * FROM mahasiswa WHERE id_mahasiswa=?";
    connection.query(sql,[id],function(error,rows){
        if(error) {
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}

//menambahkan data mahasiswa
exports.Create = function(req, res){
    // var nim = req.body.nim;
    // var nama = req.body.nama;
    // var jurusan = req.body.jurusan;
    var [nama,nim,jurusan] = req.body; // dijadikan satu baris
    let sql = "INSERT INTO mahasiswa(nama,nim,jurusan) VALUES(?,?,?)";
    connection.query(sql,[nama,nim,jurusan],function(error,rows){
        if(error) {
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan data",res);
        }
    })
}

//update data mahasiswa
exports.Update = function(req, res){
    var id = req.params.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    let sql = "UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id_mahasiswa=?";
    connection.query(sql,[nama,nim,jurusan,id],function(error){
        if(error) {
            console.log(error);
        } else {
            response.ok("Berhasil update data",res);
        }
    })
}

//delete data mahasiswa
exports.Delete = function(req, res){
    var id = req.params.id;
    let sql = "DELETE FROM mahasiswa WHERE id_mahasiswa=?";
    connection.query(sql,[id],function(error){
        if(error) {
            console.log(error);
        } else {
            response.ok("Berhasil hapus data",res);
        }
    })
}

//menampilkan matkul nested
exports.matkulNested = function(req, res){
    let sql = "select mahasiswa.id_mahasiswa, mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa AND krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id_mahasiswa";
    connection.query(sql,
        function (error,rows, fields){
            if(error) {
                console.log(error)
            } else {
                response.matkulNested(rows,res);
            }
        })
}