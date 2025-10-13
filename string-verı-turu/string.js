// * string veri turu islemleri 

let email = "talhabatuhan@hotmail.com"
let firstName = "Batuhan"
let lastName = "OKYAY"

// * string karekter sayisi 
console.log(email.length);


//* ilk karekteri bulma -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(1));


//* buyuk harf kucuk harf 
firstName = firstName.toUpperCase()
console.log(firstName);

firstName = firstName.toLowerCase()
console.log(firstName);


//* string icinde istedigimiz bilgiyi aratmak ve yerini bulmak -> search
console.log(email.search("@")); //? @ isareti nerede basladigini gormek icin kullandik
console.log(email[12]); //? 12 de basladigini gorduk sana @ isaretini aldik

email.search("olmayan bir deger girersen") // -1 olarak sonuc verir

//* belli bir yere kadar al -> slice 

let DOMAIN = email.slice( email.search("@") + 1)
console.log(DOMAIN);  //? hotmail.com yazdi

console.log(
    DOMAIN.slice(0 , DOMAIN.indexOf('.')) //? sadece hotmail kismini aldik 
)

//* bilgiyi degistir -> replace 
email = email.replace("hotmail.com" , "kodluyoruz.org") //? homail.com u kodluyoruz.org ile degistirdik

console.log(email);


//* istedigim bilgi var mi -> includes true ve false olarak bize donuyor icinde var mi yok mu
email.includes("dkfhsd") //? burada false donecek 
email.includes("@") //? burada true donecek 

//* istedigim bilgiyle basladimi bitti mi -> startWidth endsWidth

console.log(email.endsWith("kodluyoruz.org")) //? true degerini verecek cunku burada mail kodluyoruz.org olarak bitti mi diye soruyoruz

//* ilk harflerini buyuk yapmak
firstName = "FIRST"
lastName = "LAST"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName);



//* SORU 1 
 let url = "www.kodluyoruz.org";
 let language = "Java";

 console.log(language);
// Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.

//? CEVAP 1
language = language.replace("Java" , "JavaScirpt")
console.log(language)


//* SORU 2
// Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.

console.log(url.indexOf(".")); // burada nokltanin yerini ogreniyoruz 3 deymis

domain = url.slice(3+1) // 3 + 1 noktadan sonrasını al demek

console.log(domain);

