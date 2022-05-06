document.onclick = function() {
    for (let i = 0; i < document.querySelector("body").children.length; i++) {
        document.querySelector("body").children[i].addEventListener('click', function handleClick() {
            console.log(document.querySelector("body").children[i].tagName);
        });
    }
}
