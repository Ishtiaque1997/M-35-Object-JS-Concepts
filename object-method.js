const student={
 id:101,
 balance:3000,
 name:'Shakil',
 major:'English',
 isRich:false,
 subs:['sociology','bengali','calculus'],
 bestFriend:{
  name:'Ajmol',
  major:'english'
 },

 //declare method
 takeExam:function(){
  console.log(this.name,'taking exam')
 },


 treatDey:function(expense,boksis){
  this.balance=this.balance-expense-boksis;
  return this.balance;
 }

}

//calling a function as an object property
student.takeExam();
const remaining=student.treatDey(700,100);
// console.log(remaining)