const string = 'This is   a   string  12   345. String is this.'

// Letter and number count (without space and other characters) --> Expected output: 30
const letterAndNumberCount = string.replace(/[^a-zA-Z0-9]/g, '').length;
console.log(letterAndNumberCount);

// Word count (with number words) --> Expected output: 9
const wordAndNumwordCount = string.trim().split(/\s+/).length;
console.log(wordAndNumwordCount);

// Word count (without number words) --> Expected output: 7
const clear = string.replace(/[^\w\s]|_/g, '').replace(/\d+/g, '');
const wordCount = clear.trim().split(/\s+/).filter(word => (/^[a-zA-Z0-9]+$/).test(word)).length;
console.log(wordCount);

// Unique words (if you want to count unique words you can console.log(uniqueWords.size) --> Expected output: 6
const uniqueWords = new Set(string.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/));
console.log(uniqueWords);

// Capitalize each word
const capitalized = string.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalized);

// Cout vowels(a, e, i, o, u) --> Expexted otput: 7
const vowels = ["a", "e", "i", "o", "u"];
function countVowels(str){
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels(string));

// Sum all digits from the string --> Expected output: 45
function sumDigit(number){
    return number.toString().split('').map(Number).reduce((a, b)=> a + b, 0);
}
console.log(sumDigit(123456789));

