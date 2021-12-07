// задания по переменным
//  let a = 3;
// console.log(a);

// let a = 10;
// let b = 2;
// console.log(a + b);

// if(a > b) {
//     console.log(a - b);
// } else if (b > a) {
//     console.log(b - a);
// } else {
//     console.log('равны');
// }

// console.log(a * b);
// console.log(a / b);

// let c = 15;
// let d = 2;
//
// let result = c + d;
// console.log(result);

// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result);

//задания по строкам

// let text = "Привет Мир!";
// alert(text);
//
// let text1 = "Привет,";
// let text2 = " Мир!";
// alert(text1 + text2);
//
// let text3 = text.substr(7, 3);
// alert(text3);
//еще задачи

// var seconds = 60;
// var secondsInHour = 60 * seconds;
// var secondsInDay = 24 * secondsInHour;
// var secondsInWeek = 7 * secondsInDay;
// var secondsInMonth = 30 * secondsInDay
// console.log(secondsInMonth);

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /=7;
// num ++;
// num --;
// console.log(num);

// let hour = '9';
// let minutes = '07';
// let seconds = '30';
// console.log(hour +':' + minutes + ':' + seconds);

// let text = 'Я';
// text += ' хочу';
// text += ' знать';
// text += ' JS';
// console.log(text);

// let a = 6;
// let b = 5;
// // sum = a + b; //сумма
// // pr = a * b; //проищведение
// // console.log(pr);
//
// res = a * a + b * b; //сумма квадратов
// console.log(res);

// let a = 7;
// let b = 3;
// let c = 11;
// avg = (a + b + c) / 3;
// console.log(avg);
// for (let i = 1; i < 25; i++){
//     // console.log(i % 3);
//     console.log(i % 5);
// }
// let age = 19;
// (age > 18) ? "Тебе больше 18" : "Тебе меньше 18";

// let passport = true;
// (passport) ? 'Yes' : 'No';
// (age >= 16) ? 'Yes' : 'No';
//немного математики

//задача деление по модулю
// let n = 2;
// (n % 2 == 0) ? console.log('Четное') : console.log('Не четное');

// //задачи по массивам
// var orders = ["computer: 1000", "printer : 500"];
// orders.unshift("monitor : 700");
// orders.push("keyboard : 100");
// console.log(orders);

// const array = ['ford', 'bmv', 'kia', 'volvo', 'renault'];
// array.splice(1, 1);
// array.splice(2, 1);
// console.log(array);

// var week = ["Sunday", "MONDAY", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// week.forEach(function(day,num, week) {
//     if (num % 2 == 0) {
//         // delete week[num];
//         week.splice(num, 1);
//     }
// })
// console.log(week);
// var array_num = [8, 5, 10, 6, 1, 75, 2, 0, 4];
// var bigger = 0;
// for(var item of array_num){
//     if(item > bigger){
//         bigger = item;
//     }
// }
// console.log(bigger);

// var arr1 = [22, 3 , 5, 100, 19, 55];
// var arr2 = [80, 77 , 5, 101, 519, 5];
//
// arr1.forEach(function(item, index, array){
//     if(item == arr2[index]){
//         console.log("элементы "+ index + " равны");
//     } else if( item > arr2[index]){
//         console.log("элементы "+ index + " не равны. Элемент с первого массива больше");
//     } else{
//         console.log("элементы "+ index + " не равны. Элемент со второго массива больше");
//     }
// })

// var array = ['Я хочу знать Js', 'Я не хочу знать Js'];
// for(item of array){
//     if(array.includes('Я не хочу знать Js')){
//         array.splice(item, 1);
//     }
// }
