const div = document.createElement('div');
console.log(div);

div.className ='main';
// div.id = 'byId';
div.id = Math.random()*10 + 1;
div.setAttribute('title', 'generated title');
div.style.backgroundColor = "green";
div.style.padding = '10px'
div.style.color = 'orange';
// div.innerText = 'Sonu';
const addText = document.createTextNode('sonu');
div.appendChild(addText);

document.body.appendChild(div);
