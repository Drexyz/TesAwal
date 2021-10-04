//cek biner
function cekPrima(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) {return false;}
    return num > 1;
}

//kalkulator telur
function buyEgg(tgl, uang) {
    var bonus = 0;
    
    //hitung bonus1
    if (cekPrima(tgl)){
        bonus += 2; 
    } else if (tgl%2 == 1) {
        bonus += 3;
    }
    //console.log("bonus1 : " + bonus);

    //hitung bonus2
    if (tgl%5 == 0 && bonus%2 == 0) {
        bonus *= 10;
    } else if (tgl%5 == 0 && bonus%2 == 1) {
        bonus *= 5;
    }
    //console.log("bonus2 : " + bonus);

    //kalkulator telur
    var telur = Math.floor(uang/2500);
    var lusin = Math.floor(telur/12);
    telur += lusin * bonus;
    
    return telur;
}

//console.log("tes2 : " + buyEgg(13, 60000));