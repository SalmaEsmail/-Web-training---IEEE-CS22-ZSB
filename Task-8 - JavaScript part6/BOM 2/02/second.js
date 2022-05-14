var myParent=document.body;


var options = ["op1","op2","op3","op4","op5"];
var List = document.createElement("select");
List.id = "optionslist";
myParent.appendChild(List);
for (var i = 0; i < options.length; i++) {
    var optionvalue = document.createElement("option");
    optionvalue.value = options[i];
    optionvalue.text = options[i];
    List.appendChild(optionvalue);
}
var input1=document.createElement("input")
myParent.appendChild(input1);
var input2=document.createElement("input")
myParent.appendChild(input2);
var input3=document.createElement("input")
myParent.appendChild(input3);


    input1.addEventListener("blur", (e)=>{
        if (e.target.value != undefined){
        window.localStorage.setItem("input1",e.target.value)}
        })
    input2.addEventListener("blur", (e)=>{
        if (e.target.value != undefined){
        window.localStorage.setItem("input2",e.target.value)}
        })
    input3.addEventListener("blur", (e)=>{
        if (e.target.value != undefined){
        window.localStorage.setItem("input3",e.target.value)}
        })
    List.addEventListener("blur", (e)=>{
        if (e.target.value != undefined){
        window.localStorage.setItem("option",e.target.value)}
        })
window.onload=function(e){
    List.value=localStorage.getItem("option")
    input1.value=localStorage.getItem("input1")
    input2.value=localStorage.getItem("input2")
    input3.value=localStorage.getItem("input3")
}
