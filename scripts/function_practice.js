"use strict";

const str = "teSt";

console.log(str[2]); // выведем букву 's' Она под вторым номерам.

console.log(str.toLocaleUpperCase()); // делает все буквы большими
console.log(str.toLowerCase()); // делает все буквы маленькими

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Метот позволяет определить с какого числа начинается слово // Если слова нет, то выдаст "-1"

const logg = "hello world";

console.log(logg.slice(6, 11)); // Медод позволянт вырезать нужный текст (с какой по какую букву)
console.log(logg.substring(6, 11)); // Тотже slise
console.log(logg.substring(6, 5)); // Метод вырезает нужные слова (вторая цыфра означает сколько букв нужно вырезать)

// Работа с числами

const num = 12.2;
console.log(Math.round(num)); // Метод округляет числа

const test = "12.2px";
console.log();

let userName = "Вася";

function showMessage() {
    let userName = "Петя"; // объявляем локальную переменную
    let message = "Привет, " + userName; // Петя
    console.log(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

console.log(userName); // Вася, не изменилась, функция не трогала внешнюю переменну
