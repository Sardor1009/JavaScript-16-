//class1
// class Triangle {
//     #leftside;
//     #rightside;
//     #width;
//     constructor(leftside, rightside , width){
//         this.#leftside = leftside;
//         this.#rightside = rightside;
//         this.#width = width;
//     }
//     getLeftSide() {
//         return this.#leftside;
//     }
//     getRightSide() {
//         return this.#rightside;
//     }
//     getWidth(){
//         return this.#width;
//     }
//     setSides(a,b,c){
//         this.#leftside = a;
//         this.#rightside = b;
//         this.#width = c;
//     }
// }


// let r1 = new Triangle(10,20,30);
// r1.setSides(30,40,50)

// console.log(r1.getLeftSide());
// console.log(r1.getRightSide());
// console.log(r1.getWidth());





//class2
// class Employee {
//     #id;
//     #firsName;
//     #lastName;
//     #salary;
//     constructor(id, firstName,lastName,salary){
//         this.#id = id;
//         this.#firsName = firstName;
//         this.#lastName = lastName;
//         this.#salary = salary;
//     }
//     getId(){
//         return this.#id;
//     }
//     getFirstName(){
//         return this.#firsName;
//     }
//     getlastName(){
//         return this.#lastName;
//     }
//     getSalary(){
//         return this.#salary;
//     }
//     setId(id){
//         this.#id = id;
//     }
//     setFirstName(fName){
//         this.#firsName = fName;
//     }
//     setLastName(lName){
//         this.#lastName = lName;
//     }
//     setSalary(s){
//         this.#salary = s;
//     }
//     getFullName(){
//         return `${this.#firsName} ${this.#lastName}`
//     }
//     getAnnualSalary(){
//         return this.#salary * 12
//     }
//     raiseSalary(percent){
//         this.#salary  = this.#salary * (1 + +percent/100);
//     }
// }

// let Em1 = new Employee(123,"Asilbek" , "Xoliyorov" , 30000);
// Em1.raiseSalary(20)
// console.log(Em1.getId());
// console.log(Em1.getFullName());
// console.log(Em1.getSalary());


//class3

// class CustomDate {
//     #day;
//     #month;
//     #year;
//     constructor(day , month , year){
//         this.#day = day;
//         this.#month = month;
//         this.#year = year;
//     }
//     getDay(){
//         return this.#day;
//     }
//     getMonth(){
//         return this.#month;
//     }
//     getYear(){
//         return this.#year;
//     }
//     setDay(sD){
//         this.#day = sD;
//     }
//     setMonth(sM){
//         this.#day = sM;
//     }
//     setYear(sY){
//         this.#year = sY;
//     }
//     getISOdate(){
//         return `${this.$day}-0${this.#month}-${this.#year}`
//     }
// }

// let p1 =new CustomDate(12,5,2023);
// console.log(p1.getISOdate());



//class4

// class Time{
//     #hour;
//     #minute;
//     #second;
//     constructor(hour,minute,second){
//         this.#hour = hour;
//         this.#second = second;
//         this.#minute = minute;
//     }
//     getHour(){
//         return this.#hour;
//     }
//     getSecond(){
//         return this.#second;
//     }
//     getMinute(){
//         return this.#minute;
//     }
//     setHour(h){
//         this.#hour = h;
//     }
//     setMinute(m){
//         this.#minute = m;
//     }
//     setSecond(s){
//         this.#hour = s;
//     }
//     nextSecond(){
//         return `${this.#hour}:${this.#minute}:${this.#second+1}`
//     }
//     previousSecond(){
//         return `${this.#hour}:${this.#minute}:${this.#second}-1`
//     }
// }

// let p1 = new Time(6,20,10)

// console.log(p1.nextSecond());



//class5
// class Shape{
//     #color;
//     #filled;
//     constructor(color,filled){
//         this.#color = color;
//         this.#filled = filled;
//     }
//     getColor(){
//         return this.#color;
//     }
//     setColor(s){
//         this.#color = s; 
//     }
//     isFilled(){
//         this.#filled = filled;
//     }
//     setFilled(b){
//         this.#filled = b;
//     }
// }

// let p1 = new Shape("red", true);

// class Circle extends Shape{
//     #radius;
//     constructor(color, filled , radius){
//         super(color , filled);
//         this.#radius = radius;
//     }
//     getRadius(){
//         return this.#radius;
//     }
//     setRadius(r){
//         this.#radius = r;
//     }
// }

// let p2 = new Circle("red" , true , 24);
// console.log(p2.getColor());


// class Rectangle extends Circle {
//     #width;
//     #height;
//     constructor(color,filled,radius,width,height){
//         super(color , filled ,radius);
//         this.#width = width;
//         this.#height = height;
//     }
//     getWidth(){
//         return this.#width;
//     }
//     setWidth(w){
//         this.#height = h;
//     }
//     getHeight(){
//         return this.#width;
//     }
//     setHeight(w){
//         this.#height = h;
//     }
//     getArea(){
//         return this.#width * this.height;
//     }
// }

// let p3 = new Rectangle("red" , true , 24 , 20,30);





//class6
// class Person {
//     #name;
//     #address;
//     constructor(name,address){
//         this.#name = name;
//         this.#address = address;
//     }
//     getName(){
//         return this.#name;
//     }
//     setName(n){
//         this.#name = n;
//     }
//     getAddress(){
//         return this.#address;
//     }
//     setAddress(a){
//         this.#address = a;
//     }
// }

// let p1 = new Person("Asilbek" , "Qashaqadaryo");

// class Student extends Person{
//     #faculty;
//     #year;
//     #university;
//     constructor(name , address , faculty , year , university){
//         super(name , address);
//         this.#faculty = faculty;
//         this.#university = university;
//         this.#year = year;
//     }
//     getFaculty(){
//         return this.#faculty;
//     }
//     setFaculty(f){
//         this.#faculty = f;
//     }
// }


// let s1 = new Student("Asilbek" , "Qashqadaryo" , "Iqtisodiyot" , 22 , "TSUE");

// class Employee extends Student{
//     #salary;
//     #work;
//     constructor(name,address , faculty, year , university , salary , work){
//         super(name,address,faculty , year , university);
//         this.#salary = salary;
//         this.#work = work;
//     }
//     getSalary(){
//         return this.#salary;
//     }
//     getWork(){
//         return this.#work;
//     }
// }

// let e1 = new Employee("Asilbek" , "Qashqadaryo" , "Iqtisodiyot" , 22 , "TSUE" , 3000 , "frelancer")





//class7
// class Animal {
//     #name;
//     #speed;
//     #weight;
//     constructor(name , speed , weight){
//         this.#name = name;
//         this.#speed = speed;
//         this.#weight = weight;
//     }
// }

// let a1 = new Animal("Mammal and fish" , 120 , 60)

// class Mammal extends Animal {
//     #legs;
//     constructor(name,speed,weight,legs){
//         super(name,speed,weight);
//         this.#legs = legs;
//     }
//     getLegs(){
//         return this.#legs;
//     }
// }

// let m1 = new Mammal("Mammal and fish" , 120 , 60 , 4);

// class Cat extends Mammal{
//     #getSound;
//     constructor(name,speed,weight,legs,sound){
//         super(name,speed,weight,legs);
//         this.sound = sound;
//     }
//     getSound(){
//         return this.#getSound = Meow;
//     }
// }




//class10

// class Animal {
//     #name;
//     #speed;
//     #weight;
//     constructor(name , speed , weight){
//         this.#name = name;
//         this.#speed = speed;
//         this.#weight = weight;
//     }
// }

// let a1 = new Animal("Mammal and fish" , 120 , 60)

// class Mammal extends Animal {
//     #legs;
//     constructor(name,speed,weight,legs){
//         super(name,speed,weight);
//         this.#legs = legs;
//     }
//     getLegs(){
//         return this.#legs;
//     }
// }

// let m1 = new Mammal("Mammal and fish" , 120 , 60 , 4);

// class Cat extends Mammal{
//     #getSound;
//     constructor(name,speed,weight,legs,sound){
//         super(name,speed,weight,legs);
//         this.sound = sound;
//     }
//     getSound(){
//         return this.#getSound = Meow;
//     }
// }

