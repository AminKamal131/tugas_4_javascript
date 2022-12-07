//struktur logiga if else

function jalanSatu() {
    var nilai = 2;
    if(nilai === 3){
        console.log("benar")
    }
    else if(nilai === 2){
        console.log("bencong")
    }
    else{
        console.log("salah")
    }
}

jalanSatu()


//struktur logiga if else if


var x = 91;

if(x>90)
console.log("x lebih besar dari 90")
else if (x>88)
console.log("x tidak besar")
else if (x<88)
console.log("x tidak kecil")
else
console.log("x adalah 88")


//nested if else (didala, if ada if lagi)

var x = 10;
var y = 20;
var z = 30;

if(x>y){
    if(x>z){
        console.log("x adalah yang paling besar");
    }
else{
    console.log("x adalah yang terbesar kedua");
}
}else{
    if(x<y){
        console.log("x adalah yang terkecil")
    }else{
        console.log("x adalah tebesar kedua")
    }
}


//if dan else berdasrkan tipe data

function tipedata(){
    var data = "jakarta";
    console.log(typeof(data))
    if (data === 'jakata'){
        return data
    }else{
        return 'tugasnya dibawah tulisan ini pak'
    }
}
console.log(tipedata())

//tugasnya disini karena menurut saya metode seperti ini yang membuat saya cepat paham

function tinggibadan() {
    var tinggi = 178;
    if(tinggi === 199){
        console.log("rehan")
    }
    if(tinggi === 188){
        console.log("rian")
    }
    if(tinggi === 179){
        console.log("rangga")
    }
    if(tinggi === 177){
        console.log("ruyan")
    }
    else{
        console.log("Rehan Tertinggi 199")
        console.log("Rian Tertinggi Kedua 188")
        console.log("Rangga Tertinggi Ketiga 179")
        console.log("Ruyan Tependek Dari Semuanya 177")

    }
}

tinggibadan()

