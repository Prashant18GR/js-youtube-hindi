const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id===anotherId)//false returntype we get itself a datatype which is symbol so yes symbol ka kaam hi yahi hai
//value same nahi hogi dono ki note down
let myObj ={
    name : "Prashant Kohli",
    age:24
}
const myFuntion = function(){
    console.log("Hello World")
}
console.log(typeof myObj)
myFuntion();