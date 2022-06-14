"use strict"

function getMaxDigit(number) {
    const maxDigit = ('' + number).split('.').join('');
    return Math.max.apply(null, maxDigit.split(''));
}

function degNumber(a, b){
    if (b === 0) return 1 
    let result = a;
    for (let i = 1; i < Math.abs(b); i++) {
        result *=a;
    }
    return result 
}


function firstLetterCaps(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function sumTax(num, tax = 18 + 1.5) {
    return num - (num / 100 * tax)
}

function getRandomNumber(N, M) {
    return Math.random(Math.random()*(M-N)+N)
}

function countLetter(letter, word) {
    return (word.toLowerCase().match(RegExp(letter.toLowerCase(), "g"))||[]).length
}

function convertCurrency(money) {
    const RATE = 25;
    if (money.includes('$') || money.toLowerCase().includes('usd')) {
        return parseInt(money) * RATE + " UAH";
    }
    if (money.toLowerCase().includes('uah')) {
    return parseInt(money) / RATE + " USD";
    }
    return 'Для конвертації використовуйте гривні та долари.'
}

function getRandomPassword(res) {
    var length = 8,
    charset = "0123456789";
    res = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
        res += charset.charAt(Math.floor(Math.random() * n));
    }
    return res;
}

function deleteLetters(letter, string) {
    return string.replaceAll(letter, '')
}

function isPalyndrom(string) {
    const lowRegStr = string.toLowerCase().replaceAll(" ", "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    if (lowRegStr === reverseStr) {
       return "Так!"
    } 
    else {
       return "Ні!"
    }
}

function deleteDuplicateLetter(string) {
    let str = string.toLowerCase().split('').join('')
    for (let i = 0; i < string.length; i++) {
        if (countLetter(string[i], str) > 1) {
            str = deleteLetters(string[i], str)
            }
        }
    return str   
}

console.log(`${getMaxDigit(1234587)}`)
console.log(`${powNumber(-4, -4)}`)
console.log(`${firstLetterCaps('дмИтро')}`)
console.log(`${sumWithoutTax(200)}`)
console.log(`${getRandomNumber(1, 10)}`)
console.log(`${countLetter('П', 'Паралелепіпед')}`)
console.log(`${convertCurrency('1000 uSd')}`)
console.log(`${convertCurrency('250 uaH')}`)
console.log(`${convertCurrency('1000 eur')}`)
console.log(`${getRandomPassword()}`)
console.log(`${deleteLetters('a', 'blablabla')}`)
console.log(`${isPalyndrom('мадам')}`)
console.log(`${isPalyndrom('кокос')}`)
console.log(`${isPalyndrom('Я несу гусеня')}`)
console.log(`${deleteDuplicateLetter('Дома дуже добре')}`)
