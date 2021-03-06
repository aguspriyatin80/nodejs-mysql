'use strict'; // menggunakan mode ketat javascript

exports.ok = function(values, res){
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
}

// response untuk nested matakuliah
exports.matkulNested = function(values,res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan,item)=>{
        //tentukan key group
        if(akumulasikan[item.nama]){
            //buat variabel grup nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.matakuliah)){
                //tambahkan value ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah,item.matakuliah];
            }
            if(Array.isArray(group.sks)){
                //tambahkan value ke dalam group sks
                group.sks.push(item.sks);
            } else {
                group.sks = [group.sks,item.sks];
            }

        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    },{})
    var data = {
        'status': 200,
        'values': hasil
    };
    res.json(data);
    res.end();
}