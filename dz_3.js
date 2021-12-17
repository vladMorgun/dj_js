// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//     • Создайте пустой объект user.
// • Добавьте свойство name со значением John.
// • Добавьте свойство surname со значением Smith.
// • Измените значение свойства name на Pete
var user = {};
user.name = 'John';
user.sureName = 'Smith';
user.name = 'Pete';
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false
const obj = {};
function isEmpty(Obj){
    if(Object.keys(obj).length == 0){
        return true;
    }  else {
        return false;
    };
}
console.log(isEmpty(obj));
//У нас есть объект, в котором хранятся зарплаты нашей команды “let salaries = {Ivan: 1000, Dmitriy:
// 1600, Anton: 1300}”. Напишите код для суммирования всех зарплат и сохраните результат в
// переменной sum. Если объект salaries пуст, то результат должен быть 0

let selaries = {
    Ivan: 1600,
    Anton: 1000,
    Dmitry: 1300
};
function getSum(all) {
    let sum = 0;
    for (let key in all) {
        sum += all[key];
    }
    return sum;
};
console.log(getSum(selaries));
//----------------------------------
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять
// объект. Используйте typeof для проверки, что значение свойства числовое
const employee = {
    name: 'Ivan',
    age: 33,
    dogs: 3
}

function multiplyNumeric(obj){
    for(let i in obj) {
        if (typeof obj[i] == "number") {
            obj[i] *= 2;
        }
    }

}
multiplyNumeric(employee);
console.log(employee.age);
console.log(employee.dogs);
//-----------------------
// Создайте класс transport и дочерние - car, motorbike, и bicycle.
// Придумайте и опишите по несколько свойств и методов, включая
// одинаковый для всех классов метод ride() и свойство maxSpeed,
// ограничьте максимальную скорость для объектов классов car,
//  motorbike.


class Transport {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }
    ride(){
        console.log('Кручу педали') ;
    }

}

class Car extends Transport{
    speedLimit = 60;
    inTown() {
        if(this.maxSpeed > this.speedLimit) {this.maxSpeed = this.speedLimit};
        return 'в городе еду со скоростью ' + this.maxSpeed;
    }
    startEngine(){
        return 'engine go';
    }
    ride(){
        this.startEngine();
        return  `машина: ${this.name} максимальная скорость: ${this.maxSpeed}`;
    }
}
class Motorbike extends Transport{
    speedLimit = 80;
    inTown() {
        if(this.maxSpeed > this.speedLimit) {this.maxSpeed = this.speedLimit};
        return 'в городе еду со скоростью ' + this.maxSpeed;
    }

    ride(){
        this.startEngine();
        return  `мотоцыкл: ${this.name} максимальная скорость: ${this.maxSpeed}`;
    }
    startEngine(){
        return 'engine go';
    }
}
class Bicycle extends Transport{

}

var zaz = new Car('zaz', 140);
var zaz2 = new Car('z', 145);
let java = new Motorbike('Java', 190);
const bicycle = new Bicycle('velosiped', 16);
console.log(zaz.ride());


console.log(zaz2);
console.log(zaz.inTown());
console.log(java.inTown());
console.log(zaz.ride());
console.log(bicycle.ride());

//---------------------------------------------------------------------------------

// Создайте массив из 6 объектов классов car, motorbike, bicycle и
// отсортируйте его от самого быстрого к самому медленному.

honda = new Car('honda', 240);
mazda = new Car('mazda', 140);
java = new Motorbike('java', 180);
jamaha = new Motorbike('jamaha', 260);
gornuy = new Bicycle('gornuy', 26);
desna = new Bicycle('desna', 15);
const transports = [honda, mazda, java, jamaha, gornuy, desna];
console.log(transports);
transports.sort(function(a, b){
    return b.maxSpeed - a.maxSpeed;
})
console.log(transports);

//------------------------------------------------------------
//Используя прототип добавьте метод классу transport
Transport.prototype.addMethod = function(thing){
    console.log('кручу '+ thing);
}
console.log(bicycle.addMethod('педали!!!'));
//_----------------------------------------------------
