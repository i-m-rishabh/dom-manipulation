// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all[9].attributes);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID //

// var header = document.getElementById('header');
// console.log(headerTitle);
// headerTitle.textContent = "new heading";
// header.style.border = '2px solid black';
// var subtitle = document.getElementById('subtitle');
// subtitle.style.fontWeight = 'bold';

// GETELEMENTBYCLASSNAME //

// var list = document.getElementsByClassName('list-group-item');
// console.log(list);.
// list[2].style.background = 'green';

// for(let i=0; i<list.length; i++){
    // list[i].style.fontWeight = 'bold';
// }

// GETELEMENTSBYTAGNAME //

// var ele = document.getElementsByClassName('temp');
// ele[0].style.background = 'red';
// console.log(ele);.
// var ele = document.getElementsByTagName('li');
// ele[4].style.color = 'white';
// console.log(ele);

// QUERRYSELECTOR //

// var items = document.querySelectorAll('li');
// items[1].style.background = 'green';
// console.log(items);
// items[2].style.display = 'none';
// for(let i=0; i<items.length; i++){
    // if(i%2===0){
        // items[i].style.background = 'green';
    // }
// }

// TRAVERSING THE DOM //

// var itemsList = document.querySelector('#items');
// parentNode
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.background = '#f4f4f4';
// console.log(itemsList.parentNode.parentNode);
// itemsList.parentNode.parentNode.style.background = '#f9f9f9';

// parentElement
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.background = '#f4f4f4';
// console.log(itemsList.parentElement.parentElement);
// itemsList.parentElement.parentElement.style.background = '#f9f9f9';

// children
// console.log(document.querySelector('#items').children);

// lastElementChild
// console.log(document.querySelector('#items').lastElementChild);
// document.querySelector('#items').lastElementChild.style.background = 'green';

// firstElementChild
// document.querySelector('#items').firstElementChild.style.background = 'red';

// sibling
// nextElementSibling
// console.log(document.querySelector('#items').firstElementChild.nextElementSibling);
// previousElementSibling
// console.log(document.querySelector('#items').lastElementChild.previousElementSibling);

// createElement
// var newDiv = document.createElement('div');
// console.log(newDiv);

//createTextNode 
// var newTextNode = document.createTextNode('hello world!');
// console.log(newTextNode);
// newDiv.appendChild(newTextNode);
// console.log(newDiv);

// insertBefore
// var headerTitle = document.querySelector('#header-title');
// document.querySelector('#header-div').insertBefore(newDiv,headerTitle);

// TASK 7 //
// 1.
var newHeading = document.createElement('h1');
var newText = document.createTextNode('Hello World');
newHeading.appendChild(newText);
newHeading.style.color = 'white';

var headerTitle = document.querySelector('#header-title');
document.querySelector('#header-div').insertBefore(newHeading,headerTitle);

// 2.
var newP = document.createElement('p');
var text = document.createTextNode('hello world');
newP.appendChild(text);
var items = document.querySelector('#items');
items.insertBefore(newP,items.firstElementChild);