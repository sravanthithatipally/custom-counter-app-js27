let fromuserinputel = document.getElementById("fromUserInput");
let touserinputel = document.getElementById("toUserInput");
let countertextel = document.getElementById("counterText");

let startbuttonel = document.getElementById("startBtn");
startbuttonel.onclick = function() {
    let fromuserinputval = parseInt(fromuserinputel.value);
    let touserinputval = parseInt(touserinputel.value);
    if (fromuserinputel.value === "") {
        alert("Enter the from value");
    } else if (touserinputel.value === "") {
        alert("Enter the to value");
    } else {
        countertextel.textContent = fromuserinputval;
        let counterval = setInterval(counterincrement = function() {
            fromuserinputval = fromuserinputval + 1;
            if (fromuserinputval < touserinputval) {
                countertextel.textContent = fromuserinputval;
            }

            if (fromuserinputval === touserinputval) {
                countertextel.textContent = fromuserinputval;
                clearInterval(counterval);
            }
        }, 1000);
    }
};