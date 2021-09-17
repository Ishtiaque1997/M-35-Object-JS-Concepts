const sakib={
 id:101,
 balance:3000,
 name:'Shakil',
 treatDeyArrow:()=>{
  console.log(this)
 },
 treatDeyInside:function(){
  const myArrow=()=>console.log(this)
 },

 treatDey:function(expense,boksis,tax){
  this.balance=this.balance-expense-boksis-tax;
  console.log('here 444',this)
  return this.balance;
 }

}

function add(){
 console.log(this)
}