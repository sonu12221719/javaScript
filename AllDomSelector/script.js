//select Element by Id
const a = document.getElementById('title');
console.log(a);//It will give all value with id 'title'

const b =  document.getElementById('title').className;
console.log(b);//It will give className of this id.

const c = document.getElementById('title').getAttribute('id')
console.log(c);

const d = document.getElementById('title').getAttribute('class');
console.log(d);//using attribute we fetch value of attribute

const e = document.getElementById('title').setAttribute('class', 'test');//It will override the value
//so we do document.getElementById('title').setAttribute('class', 'test heading');

const f = document.getElementsByClassName('Heading');
console.log(f);//It will also give same as id

//Now we 'a' for further use
a.style.backgroundColor = 'green';
a.style.padding = '15px';

console.log(a.innerText);//It will print only which is visible in element
console.log(a.textContent);//It will also print those text which is hided by using extra attribute.
console.log(a.innerHTML);//It will give if any html tag written inside the element


//we can also fetch element by querySelector
console.log(document.querySelector('h1'));//If there are multiple h1 tags then this will only select first one
console.log(document.querySelector('input[type ="password"]'));//It will give that input tag that contain attribute type='password';

const myul = document.querySelector('ul');
console.log(myul);
const turnGreen = document.querySelector('li');
console.log(turnGreen);//it will print fist li element
turnGreen.style.backgroundColor = 'green';
turnGreen.style.padding = '10px';

turnGreen.innerText = 'five';
console.log(turnGreen);


const tempClassList = document.getElementsByClassName('list-item');
console.log(tempClassList);
//for using map in HTMLCollection we have to change HTMLCollection into array
const myConvertedArray = Array.from(tempClassList);
console.log(myConvertedArray[0].style.color = 'red');

//Now we can aslo use for each loop in HTMLCollection after converting
myConvertedArray.forEach(function(li) {
    li.style.color = "red";
});


