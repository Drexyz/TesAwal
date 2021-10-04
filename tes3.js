function cetak_gambar(sisi){
    if (sisi%2 == 0 && sisi > 0){
        let text = "";
        let rpt = 

        //bagian atas
        text += "+ ".repeat(sisi);

        //bagian tengah
        if (sisi>2 && (sisi-2)%3==0){
            for (z=0; z<sisi-2; z++){
                text += "\n" + "= ".repeat((sisi-2)/3);
                text += "+ ";
                text += "= ".repeat((sisi-2)/3);
                text += "+ ";
                text += "= ".repeat((sisi-2)/3);
            }
        } else if(sisi>2 && (sisi-2)%3==1){
            for (z=0; z<sisi-2; z++){
                text += "\n" + "= ".repeat(Math.floor((sisi-2)/3));
                text += "+ ";
                text += "= ".repeat(Math.floor((sisi-2)/3)+1);
                text += "+ ";
                text += "= ".repeat(Math.floor((sisi-2)/3));
            }
        } else if(sisi>2 && (sisi-2)%3==2){
            for (z=0; z<sisi-2; z++){
                text += "\n" + "= ".repeat(Math.floor((sisi-2)/3)+1);
                text += "+ ";
                text += "= ".repeat(Math.floor((sisi-2)/3));
                text += "+ ";
                text += "= ".repeat(Math.floor((sisi-2)/3)+1);
            }
        }

        //bagian bawah
        text += "\n" + "+ ".repeat(sisi);
        
        return text;
    }
    else {
            return "parameter harus genap & positif";
        }
}

console.log(cetak_gambar(36));