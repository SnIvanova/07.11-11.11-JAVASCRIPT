console.log(window);
function funclk() {
    console.log("clicked");
}
let btn3 = document.querySelector("#btn1");
btn3.onclick = funclk;
console.log(btn3);

//same as above

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", funclk);

console.log(btn2);


let btn1 = document.querySelector("form button");

btn1.addEventListener("click", function() {
    let email = document.querySelector("input[type=email]");
    if (email.value.trim ().length > 2) {
        console.log(email.value + " is already ok");
    } else { console.log(email.value + " not ok"); }

});

console.log(btn1);

