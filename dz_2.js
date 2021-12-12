// перепишите функцию, используя оператор '?' или '||'
function checkAge(age){
    return age > 18 ?  true:'А родители разрешили?';
 }
function checkAge(age)  {
    if(age > 18 || age == 18){
        return true;
    } else{
        return false;
    }
}
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min (a, b){
    if(a < b){
        return a;
    }else if(b < a){
        return b;
    }
    return a; //если равны
}
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат
function pow(x, n) {
    let result = x;
    for(let i = 0; i < n - 1 ; i++){
        result *= x;
    }
    return result;
}

//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром
//должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
function inArray(text, array){
    if( array.includes(text)){
        return true;
    } else {
        return false;
    }
}
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
//     которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой
// буквой
let string = 'я хочу знать js';
function ucFirst(text){
    return text.charAt(0).toUpperCase()  + text.slice(1);
}

function strUpper(str) {
    let newString = ' ';
    const arr = str.split(' ');
    for (let item of arr) {
        newString += ucFirst(item) + ' ';
    }
    return newString;

}
// Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому
// элементу массива. Функция each должна вернуть измененный массив
var array = ['one', 'two', 'three', 'four'];
function f(str){
    return str + '1';
};


function each(arr, func){
    const newArr = [];
    for (i of arr){
        newArr.push(func(i));
    }
    return newArr;
}
// Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди
// применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму - вторая и так далее пока
// функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу.

var array_str = ['one', 'two', 'three', 'four'];

function f1(str){
    return str + '1';
};
function f2(str){
    return str + '2';
};
function f3(str){
    return str + '3';
};

const arr_f = [f1, f2, f3];
function each(arr_item, arr_func) {
    var newArray = [];
    for (var i = 0; i < arr_item.length; i++){
        var res = arr_func[i % arr_func.length](arr_item[i]);
        newArray.push(res);
    }
    return newArray;
}

console.log(each(array_str, arr_f));

//Используя замыкание сделайте функцию, которая считает и выводит количество своих вызовов
function count() {
    var count = 0;
    return function(){
        count++;
        return count;
    }
}
var countFunc = count();
console.log(countFunc());
console.log(countFunc());
console.log(countFunc());