//  function checkAge(age){
//     return age > 18 ?  true:'А родители разрешили?';
//  }
// function checkAge(age)  {
//     if(age > 18 || age == 18){
//         return true;
//     } else{
//         return false;
//     }
// }

// function min (a, b){
//     if(a < b){
//         return a;
//     }else if(b < a){
//         return b;
//     }
//     return a; //если равны
// }

// function pow(x, n) {
//     let result = x;
//     for(let i = 0; i < n - 1 ; i++){
//         result *= x;
//     }
//     return result;
// }


// function inArray(text, array){
//     if( array.includes(text)){
//         return true;
//     } else {
//         return false;
//     }
// }

// let string = 'я хочу знать js';
// function ucFirst(text){
//     return text.charAt(0).toUpperCase()  + text.slice(1);
// }
// function strUpper(str) {
//     let newString = ' ';
//     const arr = str.split(' ');
//     for (let item of arr) {
//         newString += ucFirst(item) + ' ';
//     }
//     return newString;
//
// }

// var array = ['one', 'two', 'three', 'four'];
// function f(str){
//     return str + '1';
// };
//
//
// function each(arr, func){
//     const newArr = [];
//     for (i of arr){
//         newArr.push(func(i));
//     }
//     return newArr;
// }


// var array_str = ['one', 'two', 'three', 'four'];
//
// function f1(str){
//     return str + '1';
// };
// function f2(str){
//     return str + '2';
// };
// function f3(str){
//     return str + '3';
// };
//
// const arr_f = [f1, f2, f3];
// function each(arr_item, arr_func) {
//     var newArray = [];
//     for (var i = 0; i < arr_item.length; i++){
//         var res = arr_func[i % arr_func.length](arr_item[i]);
//         newArray.push(res);
//     }
//     return newArray;
// }
//
// console.log(each(array_str, arr_f));

// function count() {
//     var count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// var countFunc = count();
// console.log(countFunc());
// console.log(countFunc());
// console.log(countFunc());