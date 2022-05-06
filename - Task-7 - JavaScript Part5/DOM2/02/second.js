let add = document.querySelector(".classes-to-add")
let AddedElement = []
let remove = document.querySelector(".classes-to-remove")
let removedElement = []
var buttom = document.querySelector('[title="Current"]')
var container = document.querySelector(".main")
let c = document.createElement("div")
add.addEventListener('blur', function e() {
    if (add.value == "") { AddedElement = [] } else {
        AddedElement = add.value.split(" ")
    }
})
remove.addEventListener('blur', function e() {
    if (remove.value == "") { removedElement = [] } else {
        removedElement = remove.value.split(" ")
    }
})
buttom.addEventListener('click', _event => {
    _event.preventDefault()
    if (AddedElement.length != 0) {


        for (var i = 0; i < AddedElement.length; i++) {
            var div = document.createElement("span")
            div.innerHTML = AddedElement[i]
            c.appendChild(div)
        }
        container.appendChild(c)
    }
    if (removedElement.length != 0) {
        for (var i = 0; i < removedElement.length; i++) {
            let r = document.querySelector('span').cloneNode(true)
            r.innerHTML = removedElement[i]
            let b = c.children
            for (let j = 0; j < b.length; j++) {
                if (b[j].innerHTML === r.innerHTML) {
                    c.removeChild(b[j])
                }
            }
        }

    }
})
