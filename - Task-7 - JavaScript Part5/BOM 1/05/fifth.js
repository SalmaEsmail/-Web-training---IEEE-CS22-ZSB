let div = document.querySelector(".num")

function e() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
    if (div.innerHTML === "5") {
        console.log("hi")
        window.open('https://elzero.org/', '', 'width=400,height=500,top=100')
    }
}
let counter = setInterval(e, 1000);
