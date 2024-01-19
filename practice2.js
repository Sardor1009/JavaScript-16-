// class Person {
//     constructor (firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getInfo(){
//         return `${this.firstName } ${this.lastName} ${this.age} yoshda`
//     }
// }

// let p1 = new Person ("Abdulaziz", "Programmer", 24)
// console.log(p1);

// console.log(p1.getInfo());

// class Animal {
//   constructor(animalName, Animaltype, age) {
//     this.animalName = animalName;
//     this.Animaltype = Animaltype;
//     this.age = age;
//   }
//   getInfo() {
//     a = 20;
//     return `${this.animalName} ${this.Animaltype} lar turiga kirib maximum ${this.age} yil yashaydi.`;
//   }
// }

// let animal = new Animal("Bear", "Yunglisimonlar", 23);

// console.log(animal instanceof Animal);
// console.log(animal instanceof String);
// console.log(animal instanceof Object);
// console.log(Animal instanceof Object);
// console.log();

// let str1 = "Abdulaziz";
// console.log(str1 instanceof String);

// let str2 = new String("Abdulaziz")
// console.log(str2 instanceof String);

// class Person {
//   constructor(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }
//   get fullname() {
//     return this.firstname + " " + this.lastname;
//   }
//   set fullname(name){
//     [this.firstname, this.lastname] = name.split(" ")
//   }
//   getInfo() {
//     return `${this.firstname} ${this.lastname} ${this.age} yoshda.`;
//   }
// }

// let p1 = new Person("Faxriddin", "Tursunov", 24)

// p1.fullname =  "Sardor Islomov"
// console.log(p1.fullname)

// console.log(Object.getOwnPropertyDescriptor(p1, "lastname"));

class Product {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Product.count;
  }
}
console.log(Product.count);

let p1 = new Product("Banana", 35);
let p2 = new Product("Cobalt", 7);

console.log(Product.getCount());

// console.log(p1);
// console.log(p2);

console.log(Product.count);
