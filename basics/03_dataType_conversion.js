//typeof is used for checking of any value of a variable
let a = 12;
console.log(typeof a);//checking type of 'a'
console.log(typeof(a));//this will also give same result

let valueInString = String(a);//"string()" this will change the dataType of value not of variable;
console.log(typeof(a));//output=> number
console.log(typeof(valueInString));//output=> string
console.log(valueInString);//"12" means 12 as  string


let isStudy = true;//this is boolean
console.log(typeof isStudy); //output=> boolean
let valueInNumber = Number(isStudy);//this will change the dataType
console.log(typeof valueInNumber);//output=> number
console.log(valueInNumber);

let x = "abc";
let y = Number(x);
console.log(typeof y);
console.log(y);//output=. NaN (Not a Number)