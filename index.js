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
console.log(items)
items[3].style.color="green"

for(var i=0;i<4;i++)
{
    console.log(items[i])
    items[i].style.backgroundColor="red"
}


var list=document.getElementsByTagName("li")

console.log(list[0])
list[1].innerText="Mani"
for(var i=0;i<4;i++)
{
    console.log(list[i])
    list[i].style.backgroundColor="white"
    list[i].style.fontWeight="bold"
}
list[2].innerText="Mani Kanth"
list[2].style.backgroundColor="green"

var que=document.querySelector("li")
console.log(que)
que.textContent="MOco"
console.log(que)
var queall=document.querySelectorAll("li")
queall[1].style.color="green"

for(var j=0;j<queall.length;j+=2)
{
    console.log(queall[j])
    queall[j].style.backgroundColor="green"
    queall[j].style.fontWeight="bold"
}