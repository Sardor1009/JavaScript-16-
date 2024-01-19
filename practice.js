// // console.log(fullName);

// // let fullName= "Islomov Sardor"

// // function add(a, b) {
// //   return a + b;
// // }

// // function average(a, b) {
// //   return add(a, b) / 2;
// // }

// // let x = average(10, 20);

// // console.log(x);

// // "use strict";

// // function add(a, b){
// //     console.log(this);
// // }

// // buyoda this gloabl functionni ifodalaydi

// // add(3, 5)

// let stranger = {
//   firstname: "Jon",
//   lastname: "Doe"
// };
// let other = { firstname: "Sardor",  age: 12, lastname: "Islomov", };

// let person = {
//   firstname: "Abdulaziz",
//   lastname: "programmer",
//   fullname(start, end, age) {
//     return start + " " + this.firstname + " " + this.lastname + "" + end + " "+ age + " yoshdamisiz?";
//   },
// };

// let appres = person.fullname.apply(stranger,[])
// console.log(appres);

// // let res = person.fullname.call(stranger, "Hello", "!", 23)
// // console.log(res);

// // console.log(person.fullname());



// // let res = person.fullname.bind(other);
// // console.log(res());

// // console.log(person.fullname());



// function Person (firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// Person.prototype.getInfo = function(){
//   return `${this.firstName } ${this.lastName} ${this.age} yoshda`
// }

// let p1 = new Person ("Abdulaziz", "Programmer", 24)
// console.log(p1);

// console.log(p1.getInfo());


// function Animal(color, type, maxAge){
//   this.color = color;
//   this.type = type;
//   this.maxAge = maxAge;
//  console.log(new.target);
//   if(!new.target){
//     return new Animal(color, type, maxAge);
//   }
// }

// Animal.prototype.GetInfo = function(){
//   a = 20;
//   return `${this.color} ${this.type} lar turiga kiruvchi yirtqich hayvon va uning maximal yashash muddati ${this.maxAge
//   } yil hisoblanadi.`
// }

// let animal =new Animal ("Bear", "Yunglisimonlar", 23)

// console.log(animal);



let animal =new Animal ("Bear", "Yunglisimonlar", 23)




