//* Template Literals Kullanımı

let username = "Batuhan"
const DOMAIN = "kodluyoruz.org"

let email =username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:",email);


//* bu kullanim yerine su sekilde de yazabiliyoruz burada kullanılan ısaret backtıck olarak gecıyor kesme ısaretı degıl ve optıon + ; tusuna basarak bunu yapabılıyoruz.

//? bırden fazla satırı yazabılmek ıcın bıze kolaylık saglıyor bu yuzden kullanılıyor

let info = `
merhaba ${username} sitemize hosgeldin.. mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bılgısı: ${new Date().getHours()}

kısa ısmınız: ${username[0]}. 
`

console.log(info);
