const sakib={
 id:101,
 balance:3000,
 name:'Shakil',

 treatDey:function(expense,boksis,tax){
  this.balance=this.balance-expense-boksis-tax;
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

//call--first parameter and the remaining with just commas
sakib.treatDey.call(heroBalam,500,100,50);
sakib.treatDey.call(heroBalam,500,100,100);

//apply--first parameter an the remaining as array

sakib.treatDey.apply(heroBalam,[100,300,0])
sakib.treatDey.apply(Golam,[500,100,100]);