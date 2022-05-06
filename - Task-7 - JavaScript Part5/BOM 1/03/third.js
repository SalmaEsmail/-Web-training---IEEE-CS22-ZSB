let div = document.querySelector(".num")

function e() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}
let counter = setInterval(e, 1000);
