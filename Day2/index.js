//1.tag selector 
const h = document.getElementsByTagName('h1');
console.log(h[0]);

//2.Id selector
const id = document.getElementById('a');
console.log(id);

//3.class selector 
const cls = document.getElementsByClassName('b');
console.log(cls[0]);

//4.Query selector
const query = document.querySelector('#a');
console.log(query);

//5. Query selector All
const queryAll = document.querySelectorAll('h2');
console.log(queryAll[0]);