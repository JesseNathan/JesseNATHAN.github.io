let nilaiAkhir = prompt("Masukkan Nilai Anda: ")
let grade;

if(nilaiAkhir < 0 || nilaiAkhir > 99){
    grade = "Salah Memasukkan Nilai"
}
else if(nilaiAkhir >= 96){
    grade = "A"
}
else if(nilaiAkhir >= 91){
    grade = "B"
}
else if(nilaiAkhir >= 86){
    grade = "C"
}
else if(nilaiAkhir >= 81){
    grade = "D"
}
else if(nilaiAkhir >= 76){
    grade = "E"
}
else if(nilaiAkhir >= 66){
    grade = "F"
}
else{
    grade = "F-"
}

alert(`Nilai Anda Adalah : ${grade}`)
