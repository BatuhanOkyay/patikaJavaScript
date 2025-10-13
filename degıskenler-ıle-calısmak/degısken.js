// let ve cons ıle degısken tanımlama

// eger bırsey degısekce bunu let ıle tanımlarız ama degısmeyecekse bunu const ıle tanımlarız. var ıse let ıle aynıdır eskıden var kullanılıyormus artık let kullanılıyor 

//var ıle degısken tanımlama

var serverName = "batuhanokyay.com"
console.log(serverName);

//let ıle degıskenı bos olarak tanımlamak 

let serverrName;
console.log(serverrName);

//let ile degıskene bılgı atamak 

serverrName = "https://batuhanokyay.com"
console.log(serverrName);

// let ıle degıskene bılgı atayarak tanımlamak 

let password = "1234"
console.log(password);

// degısken ataması yapmadan onde kullanmaya calısmak bu bır hatalı kullanımdır o yuzdden hata almamak ıcın yorum satırına alınmıstır

// console.log(fullName);
// let fullName = "Batuhan Okyay";

//dogru kullanım 
let fullName = "Batuhan Okyay";

//let ıle tanımlanan degıskenın ıcındekı bılgıyı degıstırmek
fullName = "Talha Batuhan Okyay";

// bırlestırme veya ekleme ıslemı 
fullName = fullName +  " yeni eklenen bilgi";
console.log(fullName);

fullName = "Sıfırlandı";
fullName += " ve yeni bilgi eklendi"; // += ile de yapılabilir.
console.log(fullName);
