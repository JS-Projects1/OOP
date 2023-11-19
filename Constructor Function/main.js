/*
Constructor Function
*/
let user1 = {
  id: 1,
  name: "marwa",
  salary: 50000,
};

let user2 = {
  id: 2,
  name: "marwa",
  salary: 50000,
};
console.log(user1.id);
console.log(user1.name);
console.log(user1.salary);
console.log("------------------------------");
// نقوم بستخدام كونستركتر لاختصار الكود في حال كان لدي 10 مستخدم سوف اكرر الكود بشكل كبير أما الكونستركتر نقوم بانشاء الشكل العام ثم نستدعسه عند إنشاء مستخدم وندخل قيمه

function User(id, name, salary) {
  this.i = id;
  this.n = name;
  this.s = salary;
}

let userOne = new User(1, "Marwa", 50000);
let userTwo = new User(2, "Maha", 50000);

console.log(userOne.i);
console.log(userOne.n);
console.log(userOne.s);
console.log(userTwo);

// تتيح لي المعلمات الافتراضية إنشاء وظيفة سيتم تشغيلها بقيم الوسيطات الافتراضية حتى لو لم أمررها بأي وسيطات، مع الحفاظ على المرونة الكافية للسماح لي بتمرير قيم الوسيطات المخصصة والتعامل معها وفقًا لذلك.
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
    // console.log('Result:', number * number) NaN
    // console.log(number) undefined
}
withDefaultParams();
console.log("------------------------------");

/*
Constructor Function
- New syntax
*/

class Person {
  constructor(id, name, salary) {
    this.i = id;
    this.n = name;
    this.s = salary;
  }
}
let perOne = new Person(1, "Marwa", 50000);
let perTwo = new Person(2, "Maha", 50000);

console.log(perOne instanceof Person);
console.log(perOne.constructor === Person);
console.log("------------------------------");

/*
Constructor Function
- Deal With Properties And Methods
- Update Properties
*/

class Car {
  constructor(name, color, price) {
    // Properties
    this.n = name;
    this.c = color || "transparent";
    this.p = price > 60000 ? price + 1000 : price;
    this.msg = function () {
      return `Car Name ${this.n} and Color${this.c} and Price ${this.p}`;
    };
  }
  // Methods
  WriteMag() {
    return `Car Name ${this.n} and Color${this.c} and Price ${this.p}`;
  }
  update(upName) {
    this.n = upName;
  }
}

let car1 = new Car("lan", "red", 7000);
console.log(car1);
console.log(car1.n);
console.log(car1.c);
console.log(car1.p);

console.log(car1.msg); // Native Code دالة ليس لها اسم
console.log(car1.msg());

console.log(car1.WriteMag());
console.log(car1.WriteMag); // Native Code  دالة لها اسم

car1.update("KIA");
console.log(car1.n);
console.log("------------------------------");

/*
Constructor Function
- Built in Constructors
*/

let f_name = "marwa";
let l_name = new String("refaieh");

console.log(typeof f_name);
console.log(typeof l_name);

console.log(f_name instanceof String);
console.log(l_name instanceof String);

console.log(f_name.constructor === String);
console.log(l_name.constructor === String);
console.log("------------------------------");

/*
Class
- Static Properties And Methods
*/

class Animal {
  count = 0;
  static color = "red";
  constructor(name) {
    this.n = name;
  }
  animalMag() {
    return "meesge";
  }
  static stativMag() {
    return "static meesge";
  }
}

let animal = new Animal("bird");
console.log(animal.n);
console.log(animal.count);
console.log(Animal.color);
console.log(animal.animalMag());
console.log(Animal.stativMag());
console.log("------------------------------");

/*
عندما تنشئ كائنًا من الفئة Train دون تحديد قيمة للخاصية lightsOn، فإن قيمتها الافتراضية ستكون undefined. وفي جافاسكريبت، يتم تفسير قيمة undefined على أنها false في بعض السياقات اللوجيكية، بما في ذلك عند استخدام عملية النفي (!). 

في الدالة toggleLights()، يتم استخدام عملية النفي (!) لتغيير قيمة الخاصية lightsOn من القيمة الحالية (التي قد تكون undefined، ولكن تفسر على أنها false) إلى القيمة العكسية لها. فإذا كانت القيمة الحالية false (أو undefined)، سيتم تغيير قيمة lightsOn إلى true، وإذا كانت القيمة الحالية true، سيتم تغيير قيمة lightsOn إلى false.
*/
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    // يتم طباعة الكائن الحالي
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}