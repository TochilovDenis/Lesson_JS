//Задание 1: Сравнение двух чисел

function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
console.log(compareNumbers(5, 10)); // -1

//Задание 2: Вычисление факториала

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//Задание 3: Объединение цифр в число

function mergeDigits(a, b, c) {
    return a * 100 + b * 10 + c;
}
console.log(mergeDigits(1, 4, 9)); // 149

//Задание 4: Вычисление площади

function calculateArea(length, width) {
    if (arguments.length === 1) {
        return length * length; // квадрат
    }
    return length * width; // прямоугольник
}
console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(5)); // 25

//Задание 5: Проверка совершенного числа

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfectNumber(6)); // true

//Задание 6: Поиск совершенных чисел в диапазоне

function findPerfectNumbers(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(findPerfectNumbers(1, 1000)); // [6, 28, 496]

// Задание 7: Форматирование времени

function formatTime(hours, minutes = 0, seconds = 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
console.log(formatTime(5, 3, 10)); // 05:03:10

//Задание 8: Перевод времени в секунды

function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}
console.log(timeToSeconds(1, 2, 3)); // 3723

//Задание 9: Перевод секунд в формат времени

function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
console.log(secondsToTime(3723)); // 01:02:03

//Задание 10: Расчет разницы между датами

function timeDifference(h1, m1, s1, h2, m2, s2) {
    let totalSeconds1 = timeToSeconds(h1, m1, s1);
    let totalSeconds2 = timeToSeconds(h2, m2, s2);
    let diff = Math.abs(totalSeconds1 - totalSeconds2);
    return secondsToTime(diff);
}
console.log(timeDifference(1, 0, 0, 2, 0, 0)); // 01:00:00



