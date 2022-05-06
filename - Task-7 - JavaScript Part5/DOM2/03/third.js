let a = document.querySelector('p')
window.onload = function() {
    a.remove();
};
let before = document.createElement("div")
before.setAttribute("class", "start")
before.setAttribute("title", "StartElement")
before.setAttribute("data-value", "start")
before.textContent = "start"

let after = document.createElement("div")
after.setAttribute("class", "end")
after.setAttribute("title", "End Element")
after.setAttribute("data-value", "End")
after.textContent = "end"
let main = document.querySelector(".our-element")
document.body.appendChild(after)
document.body.insertAdjacentElement('afterbegin', before)
