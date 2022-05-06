let promptmsg = prompt("Print Number From – To")
let l = promptmsg.split("-")
if (+l[0] < +l[1]) {
    for (let i = +l[0]; i <= +l[1]; i++) {
        console.log(i)
    }
}
