//1. using object literal
const student={name:'Tom',job:'Cricketer'}

//2. using constructor
const person=new Object();
// console.log(person)

//3.using  inheritance
const human=Object.create(student)
// const human=Object.create(null)
// console.log(human);

//4. using class
class People{
 constructor(name,age){
  this.name=name;
  this.age=age;
 }
}
const peope=new People('Manus',12);
// console.log(peope)


//5. function
function MyPeople(name,age){
  this.name=name;
  this.age=age
}
const man=new MyPeople('kader',89);
console.log(man)