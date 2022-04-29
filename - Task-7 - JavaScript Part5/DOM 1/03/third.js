var input= document.querySelector("input")
n=0
input.addEventListener('keydown', function (e) {
    if (input.value =="")n=0
    else n=input.value
    document.getElementsByClassName("result")[0].textContent= `{${n}}USD Dollar ={${n*15.6}}Egyptian Pound`
});
input.addEventListener('change', function (e) {
    if (input.value =="")n=0
    else n=input.value
    document.getElementsByClassName("result")[0].textContent= `{${n}}USD Dollar ={${n*15.6}}Egyptian Pound`
});
input.addEventListener('keyup', function (e) {
    if (input.value =="")n=0
    else n=input.value
    document.getElementsByClassName("result")[0].textContent= `{${n}}USD Dollar ={${n*15.6}}Egyptian Pound`
