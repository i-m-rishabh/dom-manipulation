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
// var newHeading = document.createElement('h1');
// var newText = document.createTextNode('Hello World');
// newHeading.appendChild(newText);
// newHeading.style.color = 'white';

// var headerTitle = document.querySelector('#header-title');
// document.querySelector('#header-div').insertBefore(newHeading,headerTitle);

// // 2.
// var newP = document.createElement('p');
// var text = document.createTextNode('hello world');
// newP.appendChild(text);
// var items = document.querySelector('#items');
// items.insertBefore(newP,items.firstElementChild);

// remove element
var itemsList = document.getElementById('items');
// console.log(itemsList);
itemsList.addEventListener('click',remove);

function remove(e){
    if(e.target.classList.contains('delete')){
       itemsList.removeChild(e.target.parentElement); 
    }
}

// add element
var form = document.querySelector('.form');
form.addEventListener('submit', addElement);

function addElement(e){
    e.preventDefault();
    var element = document.getElementById('newElement').value;
    var elementDes = document.getElementById('newElement-des').value;
    // creating new li
    var li = document.createElement('li');
    // adding class name
    li.className = 'list-group-item';
    // creting text content of li
    var textSpan = document.createElement('span');
    textSpan.className = 'item me-1 fw-bold';
    var content = document.createTextNode(element);
    textSpan.appendChild(content);
    li.appendChild(textSpan);
        // creting text-description content of li
        var textSpan = document.createElement('span');
        textSpan.className = 'item-des me-1';
        var content = document.createTextNode(elementDes);
        textSpan.appendChild(content);
        li.appendChild(textSpan);
    // creating delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    var content = document.createTextNode('X');
    deleteBtn.appendChild(content);
    li.appendChild(deleteBtn);
    // creating edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-primary float-end edit mx-1';
    var content = document.createTextNode('edit');
    editBtn.appendChild(content);
    li.appendChild(editBtn);
    // adding new li to list
    itemsList.appendChild(li);
    document.getElementById('newElement').value = '';
    document.getElementById('newElement-des').value = '';

}

// search element //

// document.getElementById('search-form').addEventListener('submit', searchElement);

// function searchElement(e){
//     e.preventDefault();
//     console.log('hello');
// }

document.getElementById('search-input').addEventListener('keyup',filterElement);

function filterElement(e){
    let text = e.target.value.toLocaleLowerCase();
    let items = document.querySelector('#items').children;
    for(let i=0; i<items.length; i++){
        if(items[i].children[0].textContent.toLocaleLowerCase().indexOf(text)!=-1 || items[i].children[1].textContent.toLocaleLowerCase().indexOf(text)!=-1){
            items[i].style.display = 'block';
        }else{
            items[i].style.display = 'none';
        }
    }
}