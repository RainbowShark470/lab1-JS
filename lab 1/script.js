let banan = 10;
let qiwi = 15;
function fruits() {
    if (banan == 10) {
        console.log(banan + qiwi)
    } else {
        console=log(banan * qiwi)
    }
}

fruits()

let j = 'bananas';
let m = 'hachapuri';

console.log(j,m)

let jmm = true;
console.log(jmm)

let smm = false;
console.log(smm)

console.log(typeof true)
console.log(typeof 10)
console.log(typeof 15.5)
console.log(typeof "")
console.log(typeof _)

let curent_year ;

console.log(typeof curent_year)

const python = 2023;
const uu = python - 1000
const gg = python * 2010

console.log(uu *10, gg/2)

const firstname = 'Aituar'
const secondname = 'Sasha'

console.log(firstname + ' ' + secondname)

let x = 10 + 7;
x += 12;
x -= 20;
x *= 5;
x /= 3;
x++;
x--;
--x;
++x
console.log(x)

const ka = 22;
const la = 23;
console.log(ka > la)

const year = 2023;
const ufc = 'fighter'
const durman = 'im ' + firstname + ', im a' + ' ' + ufc + ', my age is ' + (year - 2004);
console.log(durman)

const newdurman = `i'm ${firstname}, ' im a', ${ufc}, 'my age is ', ${(year - 2004)}`;
console.log(newdurman)

/*language = prompt('where u from')

switch(language){
    case 'kazakh':
        console.log('youcan')
        break;
        case 'russian':
            console.log('you cant')
            break;
            case 'korean':
                console.log('you asian')
                break;
            default: 'madagaskar';
            console.log('neizvestno')
            break;
}
*/


function Vasya() {
    let m = ['pikaper', 'maloi', 'russian'];
    for (let i in m){
        console.log(m[i])
    }
}
Vasya()

function vasyandra(x){
    console.log(x)
}
let s = ['pikaper', 'maloi', 'russian'];
s.forEach(vasyandra);
s.push(100)
s.shift([0])
console.log(s)

let supra = document.getElementsByClassName('.mytext')
console.log(supra.innerHTML)

/*laba*/

let population = 19644067;
console.log('population is ' + population/2)
population++
console.log(population)

let Finland = 6000000;
let Kazakhstan = 19644067;
    if(Kazakhstan > Finland){
        console.log('да')
    } else {
        console.log('net')
    }

let Uzbekistan = 30000000;
let Kazakhstan2 = 19644067;
    if(Kazakhstan < Uzbekistan){
        console.log('да')
    } else {
        console.log('net')
    }

let describe = 'Португалия находится в Европе, и ее 11 миллионов люди говорят по-португальски'
    if(Kazakhstan > Uzbekistan){
        console.log('Население Португалии выше среднего')
    } else {
        console.log('Население Португалии на 22 миллиона ниже среднего» (22 — это среднее число 33 человек).')
    }

let numNeighbours = 1;

if(numNeighbours == 1){
    console.log('Только 1 граница!')
} else {
    console.log('Без границ» (этот блок будет выполняться, когда numNeighbours равно 0 или любому другому значению')
}

let Sara;
let engcountry = 50000000;

if(Sara == engcountry){
    console.log('Вы должны жить в Португалии :)')
} else {
    console.log('Португалия не соответствует вашим критериям :(')
}

/*drugoi sposob*/

let pop = 19000000
let cntry = 'Kazakhstan'
let cntry1 = 'Portugal'
let continent = 'Eurasia'
let language = 'Kazakh/russian'

console.log(pop / 2);
pop++
console.log(pop);
console.log(pop>60000000)
console.log(pop<33000000)

const descr = 
cntry + 'is in ' + 
continent +
'and its ' +
pop +
'million people speak' +
language;

console.log(descr)

const descr1 = `${cntry1} is in ${continent} and its ${pop} million people speak ${language}`
console.log(descr1)

let isIsland;
if(language === 'Kazakh/Russian' && pop > 500 && !isIsland){
    console.log(`You should live is ${cntry} :)`);
} else {
    console.log(`${cntry} does not meet your criteria :(`)
}

switch(language){
    case 'chinese':
        case 'mandarin':
        console.log('2 nmb of native spkrs');
            break;
    case 'spanish':
        console.log('3rd place in nmbr native spkr')
        break;
        case 'english':
            console.log('most place')
            break;
            case 'hidi':
                console.log('4th place')
                break;
                default:
                    console.log('this is a greate lang')
}

console.log(`${cntry}'s pop is ${cntry > 33000000 ? 'above' : 'below'} average`)

let ArmanHeight = 169;
let ArmanWeight = 78;
//
let KuatHeight = 195;
let KuatWeight = 92;
let IMT = 2;

let imt1 = ArmanHeight/ArmanWeight**IMT;
let imt2 = KuatHeight/KuatWeight**IMT;
console.log(imt1,imt2)

/*if(imt1 > imt2) {
    console.log(true)
} else {
    console.log(false)
}*/

if (imt1 > imt2){
    console.log(`ИМТ Армана ${imt1} выше, чем у Куата! ${imt2}`)
} else {
    console.log(`ИМТ Куата ${imt1} выше, чем у Армана! ${imt2}`)
}

let Almaty = 96;
let Astana = 88;
let minScore = 100;

let avg = Almaty*20/minScore
let avg1 = Astana*20/minScore
console.log(avg, avg1)

if (avg > avg1) { 
    console.log('Almaty')
}else if(avg < avg1){
    console.log('Astana')
} else {
    console.log('ничья')
}

let check = 275
let tip = 40

let ee = (check + tip*15/2)
let ee1 = (check + tip*20/2)
console.log('total: ' + ee + ' is 15%')
console.log('total: ' + ee1 + ' is 20%')