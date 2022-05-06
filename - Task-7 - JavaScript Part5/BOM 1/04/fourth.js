let mydiv = document.querySelector(".num")

function e() {
    mydiv.innerHTML -= 1;
    if (mydiv.innerHTML === "5") {
        location.href = "https://elzero.org/"
    }
}
let counter = setInterval(e, 1000);
