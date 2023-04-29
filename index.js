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