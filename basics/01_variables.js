const studentId = 784893; 
// studentId = 23443;   //we cann't do that as constant value is declared only once for one variable.
const id = 12; // It is valid.
console.log(studentId);
console.log(id);

//we can also declare variable using 'let and var'
var name = "sonu"; //It has global scope and it change the valude of variable.
var name = "kumar";
console.log(name);

let roll = 2;//It has functional or block level scop and it can also change the value of variables inside the block.
roll = 5;
console.log(roll);

//we can also declare variable without keywords like
account = 46738;  //But it is not good practice we always avoid to do this
console.log(account);

let a;//if we print 'a' it will give 'undefined'
console.log(a);  

//In the avobe we see that for printing variables value everytime we write console.log() we can avoid that using the follow
console.log([studentId, id, name, roll, account,a])//using this we get all variables value at once not what dataType of that variable.
