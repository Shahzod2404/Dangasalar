
// -------------------------mashq - 1 ------------

/*let malumot = prompt(`Ismingizni kiriting`);
let yosh = prompt(`yoshingizni kiriting`)
let yil = 2023;

const result = yil - yosh

console.log(`Hurmatli ${malumot} siz ${result} yida tug'ilgansiz. Va ${yosh * 12} oy ${(yosh * 365)} kun yashagansiz.`);*/


//-------------------------mashq - 2 -------------

/*let ismlar = [`Sunnat`, `Bexruz`, `Shahzod`]
const ism = prompt(`Ism kiriting:`)

if (ismlar.includes(ism)) {
    console.log(`Ha ${ism} bor`);
} else {
    console.log(`bunday ${ism} ismi yoq`);
} */

//-------------------------------mashq - 3 ------------

/*let ismlar = [`Sunnat`, `Bexruz`, `Shahzod`, `Farrux`, `Firdavs`];

for (let i = 0; i < ismlar.length; i++) {
let result = ismlar[i] + `bek`
console.log(result);
}*/


//--------------------------------mashq - 4 -----------------------
/*let ismlar = [[false, true], [1, 2], 99, `yaxshi`];


ismlar.forEach((item, i) => {
    if (typeof item == 'string') {
        console.log(`String index:`, i);
    }
})*/

//-------------------------------- mashq - 5 --------------------------

/*const arr = [[1, 2, 3], `Sunnat`, [4, 5, 6], `Bexruz`, `true, false`];
const res = [];

arr.forEach((item) => {
    const result = Array.isArray(item)
    if (result) {
        item.forEach((num) => {
            res.push(num)
        })
    }
})

console.log(res);*/

//----------------------------------mashq - 6 ---------------------

/*const ajrat = [null, `false`, 0, 99, false, undefined, '', NaN, `0`];
const fall = [];
const tur = [];

ajrat.forEach((item) => {
    if (!item) {
        fall.push(item);
    }
});

ajrat.forEach((item) => {
    if (item) {
        tur.push(item);
    }
});

console.log(tur);

console.log(fall);*/


/*const ismlar = [`sunnat`, `bexruz`, `farrux`, `firdavs`];
const res = [];*/

/*let villa  = `samarqand`;
let result = villa.split(``).reverse();

let yosh = ``;

result.forEach((item) =>{
yosh += item
})
console.log(yosh);*/



const iroda = document.querySelector(`h1`);
iroda.classList.add('sariq')

const text = document.querySelectorAll(`p`);
console.log(text);


text.forEach((item) => {
    if (item.textContent.includes(`Sunnat`)) {
        item.classList.add('sunnat')
    }
    if (item.textContent.includes(`Farrux`)) {
        item.classList.add('farrux')
    }
    if (item.textContent.includes(`Firdavs`)) {
        item.classList.add('firdavs')
    }
    if (item.textContent.includes(`Bexruz`)) {
        item.classList.add('bexruz')
    }else{
    item.classList.add('qoganlar')
    }
})








