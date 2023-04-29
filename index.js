// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
document.title = "Item Lister";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all[9].attributes);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID //
var header = document.getElementById('header');
// console.log(headerTitle);
// headerTitle.textContent = "new heading";
header.style.border = '2px solid black';
var subtitle = document.getElementById('subtitle');
subtitle.style.fontWeight = 'bold';

// GETELEMENTBYCLASSNAME //
var list = document.getElementsByClassName('list-group-item');
// console.log(list);.
list[2].style.background = 'green';

for(let i=0; i<list.length; i++){
    list[i].style.fontWeight = 'bold';
}

// GETELEMENTSBYTAGNAME //
var ele = document.getElementsByClassName('temp');
ele[0].style.background = 'red';
// console.log(ele);.
var ele = document.getElementsByTagName('li');
ele[4].style.color = 'white';
// console.log(ele);

// QUERRYSELECTOR //
var items = document.querySelectorAll('li');
items[1].style.background = 'green';
// console.log(items);
items[2].style.display = 'none';

for(let i=0; i<items.length; i++){
    if(i%2===0){
        items[i].style.background = 'green';
    }
}