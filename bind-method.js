const sakib={
 id:101,
 balance:3000,
 name:'Shakil',

 treatDey:function(expense){
  this.balance=this.balance-expense;
  console.log('here 444',this)
  return this.balance;
 }

}

const heroBalam={
 id:102,
 balance:6000,
 name:'Hero Balam'
}

const Golam={
 id:102,
 balance:8000,
 name:'Hero Golam'
}

//binding to another one
const heroTreatDey=sakib.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(100);
sakib.treatDey(1000)
const normalTreatDey=sakib.treatDey.bind(Golam);
normalTreatDey(3000);