// 4 Pillars of DOM
//+++++++++++++++++++

//1. Selection of an Elements
//2. Changing HTML
//3. Changing CSS
//4. Event Listener


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//1. Selection of an Elements
const b = document.getElementById('hiToDom');
console.log(b);//It will select element using id

const c = document.getElementsByClassName('new');
console.log(c);//It will select element using className

const a = document.querySelector("h1");
console.log(a);//it will select all h1 tags and print in console

const d = document.querySelectorAll('h1');//It will select all the list of 'h1' tags present in html file

//2.Changing in HTML
a.innerHTML="sonu"; //It will change the text of h1 tag to 'sonu' (here a is const varible from above)
a.innerText;//It will give us everything which is visible from tag
a.textContent;//It will give everything which is hidden in using some special attribute
//and many more things are there for changing.


//3. changing css
a.style.color="blue";//This will change the color of text to blue
a.style.backgroundColor="red";//this will make background color red
//Note:- for writing properties we use camelCase letter


//4. Event Listener
a.addEventListener("click",function(){
    a.style.color='blue';
    a.style.backgroundColor='red';
})//after click we see these above two changes

