var myParent = document.body;
var fonts = ["Open Sans","Cairo","Roboto"];
var colors0 = ["red","blue","black"];
var sizes = ["17px","18px","19px"];

var fontsList = document.createElement("select");
fontsList.id = "fonts";
fontsList.onblur=
myParent.appendChild(fontsList);

var colorsList = document.createElement("select");
colorsList.id = "color";
myParent.appendChild(colorsList);

var sizesList = document.createElement("select");
sizesList.id = "sizes";
myParent.appendChild(sizesList);
for (var i = 0; i < fonts.length; i++) {
    var fontvalue = document.createElement("option");
    fontvalue.value = fonts[i];
    fontvalue.text = fonts[i];
    fontsList.appendChild(fontvalue);
}
for (var i = 0; i < colors0.length; i++) {
    var colorvalue = document.createElement("option");
    colorvalue.value = colors0[i];
    colorvalue.text = colors0[i];
    colorsList.appendChild(colorvalue);
}
for (var i = 0; i < sizes.length; i++) {
    var sizevalue = document.createElement("option");
    sizevalue.value = sizes[i];
    sizevalue.text = sizes[i];
    sizesList.appendChild(sizevalue);
}

let lis =document.querySelectorAll("select")

lis.forEach((li)=>{
    li.addEventListener("click", (e)=>{
        window.localStorage.setItem("e.target.text",e.target.value)
    })
})
