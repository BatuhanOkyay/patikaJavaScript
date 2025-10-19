//* DOM 

//* pathname ile dosya adını ogrenebılıyoruz 
console.log(document.location.pathname);

//* head ıcerısını gorebılıyoruz
console.log(document.head);

//* body ıcerısını gorebıloruz
console.log(document.body);

//* body ıcerısındekı arka plan rengını degıstırıyoruz bunu css ıle de yapabılırız ama buradan yapma sebebımız dınamık yapılar kurmak ıstememız yanı ornek vermek gerekırse kullanıcı bıze dogru bılgılerı verdıgınde arka plan rengını yesıl yap yanlıs bılgı verırse kırmızı yap gıbı kullanabılırız.

document.body.style.backgroundColor = "aqua"

//* url bılgısıne erısmek ıstersek bu sekılde kullanabılırız.
console.log(document.URL);

//* baseURL bılgısıne erısmek ıstersek bu sekılde de kullanabılırız.
console.log(document.baseURI);

