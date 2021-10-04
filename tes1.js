function kbiner(angka){
    //konversi ke biner
    let biner = '';
    while (angka > 0 ) { 
        biner = ( angka % 2 ) + biner; 
        angka = Math.floor( angka / 2 ); 
    }
    
    //setup hitung jajaran 0
    var prev = "";
    var hitung, hasil = 0;
    
    //hitung jajaran 0
    for (let i of biner){
        if (i==0){
            hitung++;
            if (hitung>hasil){
                hasil=hitung;
            }
        } else if (i==1) {
            hitung =  0;
        } else {
            return "konversi ke biner error";
        }
    }

    return "angka binernya " + biner + " dan jumlah maksimum angka 0 yang berurutan adalah " + hasil;
}

//console.log(kbiner(20));
//console.log(typeof(kbiner(23)));