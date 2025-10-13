// number veri türü ile çalışmak 

//* number veri türü tanımlamak 

let price = 100
let tax = 0.20
let priceTax = price * tax
let total = price + priceTax
console.log("fiyat:",price,
            "kdv oranı:",tax,
            "kdv tutarı",priceTax,
            "toplam:", total);


let stringNumber = "11" 
console.log(stringNumber);
let newNumber = Number(stringNumber) // buradaki number strıng olanı sayıya cevırıyor
console.log(newNumber);
console.log("Number constactor ıcıne bılgı gonderıldı: ",Number("1111"));


//* artırma ve azaltma islemleri

let counter = 320
counter = counter + 1 // uzun yontem 
counter += 1;
counter++;
console.log(counter);

//* işlem önceliği

console.log(2 + 3 * 10) // burada cıkması gereken sonuc 32
console.log((2+3) * 10) // burada ıse 50 cıkar 

//* mod(kalan) alma %

//? sayı tek mı cıft mi
console.log(3 % 2) // kalan 1 olacak kalan oldugu ıcın sayı demekkı tek sayı
console.log(14 % 2) // kalan olmadıgı için sayı demekkı cıft sayı 

//? 8 urun alan kolıye tum urunler sıgıyor mu
console.log("Koliye sığmayıp kalan urun adedi: ", 14 % 8); 

//* us alma **
console.log(2 * 2 * 2 * 2); // burada sonuc 16 olur 
console.log(2 ** 4); // ıkı ussu dort seklınde olucak ve sonuc yıne 16 olacak

//*asagı yuvarlama ıslemı math.floor
console.log(Math.floor(1.7)); // 1 e yuvarlayacak 


//* yukarı yuvarlama ıslemı math.ceil 
console.log(Math.ceil(1.7)); // 2 e yuvarlayacak 

//* yakına yuvarlama ıslemı math.round
console.log((Math.round(1.6))); // 2 e yuvarlayacak






