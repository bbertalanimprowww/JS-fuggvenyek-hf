// 1. Feladat - Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, második paramétere az ÁFA értéke. A függvény térjen vissza a termék bruttó árával! Az eredményt a felugró ablakban jelenítsük meg!
function bruttoSzamol(netto, afa) {
    let brutto = netto * (1 + (afa / 100));
    return brutto;
}

function bruttoKiir() {
    let netto = Number(prompt('Kérlek add meg a termék nettó árát: '));
    let afa = Number(prompt('Kérlek add meg a termék áfa kulcsát: '));
    alert('A termék bruttó ára: ' + bruttoSzamol(netto, afa) + ' Ft.');
}

// 2. Feladat – Készítsünk metódust, ami egy számról eldönti, hogy prím szám –e? Az eredményt a felugró ablakban jelenítsük meg!
function primEldont(szam) {
    if (szam <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(szam); i++) {
            if (szam % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function PrimKiir() {
    let szam = Number(prompt('Kérlek adj meg egy számot: '));
    if (primEldont(szam)) {
        alert('A szám prímszám!');
    } else {
        alert('A szám NEM prímszám!');
    }
}

// 3. Feladat – Készítsünk metódust, ami egy szövegről eldönti, hogy palindrome –e? (Pld. Rád rohan a hordár.). Az eredményt a HTML kimeneten jelenítsük meg!
function palindromeEldont(szoveg) {
    for (let i = 0; i < szoveg.length / 2; i++) {
        if (szoveg[i] !== szoveg[szoveg.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function palindromeKiir() {
    let szoveg = document.getElementById('szoveg').value;
    szoveg = szoveg.replace(/\s/g, '');
    if (palindromeEldont(szoveg)) {
        document.getElementById('result').innerHTML = "A szöveg palindrome!";
    } else {
        document.getElementById('result').innerHTML = "A szöveg NEM palindrome!";
    }
}

// 4. Feladat - Készítsünk függvényt, amelynek bemenő paramétere, hogy milyen hosszú jelszót szeretnénk, visszatérése a generált jelszó! Kizárólag angol ABC betűi és számok szerepelhetnek a jelszóban, kisbetű-nagybetű vegyesen véletlenszerűen! Az eredményt console kimeneten jelenítsük meg!
function jelszoGeneral(szam) {
    let karakterek = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let jelszo = "";
    for (let i = 0; i < szam; i++) {
        let index = Math.floor(Math.random() * karakterek.length);
        let betu = karakterek.charAt(index);
        jelszo += betu;
    }
    return jelszo;
}

function jelszoKiir() {
    let szam = Number(prompt('Kérlek adj meg egy számot, hogy milyen hosszú jelszót szeretnél: '));
    console.log("Az általad kért hosszúságú jelszó: " + jelszoGeneral(szam));
}


// 5. Feladat – Kész számról döntsük el, hogy osztói –e egymásnak maradék nélkül!
function osztoEldont(szam1, szam2) {
    let min = Math.min(szam1, szam2);
    let max = Math.max(szam1, szam2);
    for (let i = 2; i <= min; i++) {
        if (min % i === 0 && max % i === 0) {
            return true;
        }
    }
    return false;
}

function osztoKiir() {
    let szam1 = Number(prompt('Kérlek add meg az első számot: '));
    let szam2 = Number(prompt('Kérlek add meg a második számot: '));
    if (osztoEldont(szam1, szam2)) {
        alert('A két szám osztói egymásnak!');
    } else {
        alert('A két szám NEM osztói egymásnak');
    }
}

// 6. Feladat – Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot! Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!
function otoslottoGeneral() {
    let hetiNyeroszamok = [];
    while (hetiNyeroszamok.length < 5) {
        let szam = Math.floor(Math.random() * 90 + 1);
        if (!hetiNyeroszamok.includes(szam)) {
            hetiNyeroszamok.push(szam);
        }
    }
    alert(hetiNyeroszamok);
}


// 7. Feladat – Készítünk függvényt, amely egy teljes év lehetséges hatoslottó számait legenerálja! Egy héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!
function hatoslottoEvesGeneral() {
    let egeszEv = [];
    for (let i = 0; i < 52; i++) {
        let hetiNyeroszamok = [];
        while (hetiNyeroszamok.length < 6) {
            let szam = Math.floor(Math.random() * 45 + 1);
            if (!hetiNyeroszamok.includes(szam)) {
                hetiNyeroszamok.push(szam);
            }
        }
        egeszEv = egeszEv.concat(hetiNyeroszamok);
    }
    return egeszEv;
}

function hatoslottoKiir() {
    let egeszEv = hatoslottoEvesGeneral();
    for (let i = 0; i < 52; i++) {
        let hetiSzamok = egeszEv.slice(i * 6, (i + 1) * 6);
        document.getElementById('hatoslottoResult').innerHTML += i + 1 + ".hét: " + hetiSzamok + "<br>";
    }
}


// 8. Feladat - Készítsünk függvényt, amely egy szövegről elárulja, a karakterek hány százaléka magánhangzó! A speciális karaktereket ne vegyük figyelembe a számításkor!
function maganhangzoSzamol(szoveg) {
    maganhangzoTomb = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    maganhangzo = 0;
    for (let i = 0; i < szoveg.length; i++) {
        if (maganhangzoTomb.includes(szoveg[i])) {
            maganhangzo++;
        }
    }
    return maganhangzo / szoveg.length * 100;
}

function maganhangzoKiir() {
    let szoveg = document.getElementById('szoveg2').value.replace(/\s/g, '').toLowerCase();
    let maganhangzoSzam = maganhangzoSzamol(szoveg).toFixed(2);
    let eredemeny = maganhangzoSzam !== 0
        ? `Összesen ${maganhangzoSzam} %-a magánhangzó!`
        : "Nem volt benne magánhangzó!";
    document.getElementById("result2").innerHTML = eredemeny;
}


// 9. Feladat – Pitagorasz tétel  kérjünk be a derékszögű háromszög 2 befogóját, majd írjuk ki az átfogó értékét!
function pitagoraszSzamol(a, b) {
    c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(c);
}

function pitagoraszKiir() {
    let a = Number(prompt("Kérlek add meg az első befogót"));
    let b = Number(prompt("Kérlek add meg a második befogót"));
    alert("A 'c' értéke: " + pitagoraszSzamol(a,b).toFixed(2));
}

// 10. Feladat – Programunk kérje be egy autó fogyasztását (literben 100 km-en), a benzin literenkénti árát és a megteendő út hosszát, majd számítsa ki az útiköltséget!
function utikoltsegSzamol(fogyasztas, benzinAr, utHossz) {
    let utikoltseg = (utHossz*fogyasztas/100)*benzinAr;
    if (fogyasztas < 0 || benzinAr < 0 || utHossz < 0) {
        document.getElementById("result3").innerHTML = "Pozitív számot adj meg!";
    } else {
        return utikoltseg;
    }
}

function utikoltsegKiir() {
    let fogyasztas = document.getElementById('fogyasztas').value;
    let benzinAr = document.getElementById('benzinAr').value;
    let utHossz = document.getElementById('utHossz').value;
    let utikoltseg = utikoltsegSzamol(fogyasztas, benzinAr, utHossz);
    document.getElementById("result3").innerHTML = `Az utiköltséged: ${utikoltseg} Ft!`;
}


// 11. Feladat – Programunk kérje be az Euró árfolyamát (1 € hány Ft-ot ér), majd azt, hogy hány eurót akarunk átváltani Ft-ba, majd írja ki, hogy hány Ft az átváltott euró.
function euroAtvalt(forintErteke, euro) {
    let forint = euro*forintErteke;
    return forint;
}

function euroKiir() {
    let arfolyam = document.getElementById('arfolyam').value;
    let euro = document.getElementById('euro').value;
    let forint = euroAtvalt(arfolyam, euro);
    if (arfolyam < 0 || euro < 0) {
        document.getElementById('result4').innerHTML = "Pozitív számot adj meg!";
    } else {
        document.getElementById('result4').innerHTML = `A beváltott euró összesen: ${forint} Ft`;
    }
}


// 12. Hozzunk létre alkalmazást, amely kiszámolja a kocka felszínét és térfogatát!
function kockaFelszinSzamol(a) {
    let felszin = 6 * Math.pow(a, 2);
    return felszin;
}

function kockaTerfogatSzamol(a) {
    let terfogat = Math.pow(a, 3);
    return terfogat;
}

function kockaTerfogatFelszinKiir() {
    let aOldal = document.getElementById("aOldal").value;
    let felszin = kockaFelszinSzamol(aOldal);
    let terfogat = kockaTerfogatSzamol(aOldal);
    document.getElementById("result5").innerHTML = `A kocka felszíne: ${felszin}cm<sup>2</sup> <br> A térfogata: ${terfogat}cm<sup>3</sup>`;
}