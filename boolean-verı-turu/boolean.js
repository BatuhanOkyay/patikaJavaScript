// * Boolean verı turu ıle calısmak

//* icinde deger barindiran tum ifadeler true olarak doner.
//* icinde deger barindirmayan ifadeler ise false olarak doner.

//* 0 ve 1 ı anlamak acık-kapalı var-yok geldı-gelmedı tarzında kullanılır
let isActive = false; //0
isActive = true; //1
console.log(isActive);

//* burada username tanımlamadıgımız ıcın false donecek 
let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11") //true icinde deger var o yuzden true
Boolean("0") //true icinde deger var o yuzden true
Boolean("") // false icerisinde deger yok o yuzden false

//* artik user icerisine bir veri ekledigimiz icin true donecek
userName = "user"
console.log("User Name:", Boolean(userName));

//* 0, -0, null, false, NaN, undefined, ("")
Boolean(0)     // false 
Boolean(-0)    // false
Boolean(-0.1)  // true
Boolean(0 === 0) //true burada 0 esitmi 0 a diyoruz o yuzden true aliyoruz

//* karar yapilari kisminda burasi detayli anlatilacak
Boolean(userName.length > 0) //true olacak cunku username icindeki harflerin uzunlugu sifirdan buyuk mu diye soruyoruz ve buyuk oldugu icin bize true dondurecek.








