console.log(document)
console.dir(document)
console.log(window)
console.log(document.domain)
console.log(document.URL)
console.log(document.body)
console.log(document.images)
console.log(document.forms)
console.log(document.head)
console.log(document.links)
console.log(document.all[10])
// document.all[10].textContent="Hello"
var doc=document.getElementById('header-title')
var header=document.getElementById('main-header')
// doc.textContent="hii"
console.log(doc.textContent)
console.log(doc.innerText)
console.log(doc.innerHTML)
console.log(header.textContent)
console.log(header.innerText)
console.log(header.innerHTML)
header.style.border="solid 3px black"
var items=document.getElementsByClassName("list-group-item")
console.log(items)
items[0].style.color="brown"
items[3].textContent="ADD ITEM"
items[3].style.fontWeight="bold"
items[3].style.color="green"
console.log(header)