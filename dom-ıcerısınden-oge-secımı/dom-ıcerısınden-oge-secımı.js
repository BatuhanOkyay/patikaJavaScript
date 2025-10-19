//* dom ıcerısınde oge secımı 
//? getElementById ve quarySelector kullanımını işliyoruz genelde quarySelector daha fazla kullanılıyor.
//let title = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML= "Degisen Bilgi"
console.log(title.innerHTML); // normalde burada merhaba dunya yazıyordu ama bız onu degıstırerek artık degısen bılgı yazmasını sagladık 

//? query selector bırden fazla eleman olsa bile bir tane secer 
let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degıstı" // lınk bılgısı yazısı zaten elımızde vardı += dıyerek lınk bılgısını sonuna degıstı eklemıs olduk ve yenı yazımız lık bılgısı degıstı oldu.
link.style.color = "red" // lınk bılgısının rengını css eklemeden dırek burdan dıgsıtırebıldık
link.classList.add('btn') // btn adında bır tane class ekledım 

//?yukarıda yaptıgım ıslemlerı sayfada ıncele dıyerek html dokumanının ıncelerse normalde html ıcerısıne css yazmamıs olmama ragmen css ve class bılgılerı eklenmıs sekılde gorucem cunku js ıcerısınde bu bılgılerı ekledık


//* GENEL BİLGİLER 

//* getElementBydId() ıle sayfadan bulunan html elementlerının ıd lerını referans olarak alabılıyoruz

//* getElementByTagNama() metodu kullanılarak bırden fazla element e ulasabılırız

//* getElementByName() ile elemanların name degerlerıne gore alır ama ıd sadece bır kez kullanılır name ıse bırden fazla olabılır bunu unutmamak gerekır 

//* getElementByClassName burada class ısımlerıne gore alır class ısımlerının basına . koyulmalıdır