/*(soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)*/

//JAWABAN
console.log("PROGRAM MENCARI AKAR KUADRAT DARI SEBUAH BILANGAN")
const prompt = require('prompt-sync')({sigint: true});
const angka = prompt('Masukkan angka: ');
var hasilKuadrat = Math.sqrt(angka)

if(angka < 0){
    console.error("Tidak bisa input bilangan negatif")
}
else if(angka % 2 !== 0){
    console.log("Tidak bisa input bilangan ganjil")
}
else {
    console.error("Akar kuadrat dari "+ angka +" adalah "+ hasilKuadrat)
}






