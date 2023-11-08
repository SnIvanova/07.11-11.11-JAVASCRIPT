console.log(window);
console.log(window.document);
console.dir(window.document);

let title1 = window.document.getElementById("first");
title1.innerHTML = "Hello World!";
console.log(title1.innerText); // Outputs: "Hello World!"

var title = document.getElementById("first");
title.style.textDecoration = "underline";

let paragrafs = window.document.getElementsByClassName("second");

for(let i = 0; i < paragrafs.length; i++){
  paragrafs[i].style.textDecoration = "underline";
}

let link = document.getElementsByTagName("a");
link[0].href = "http://#";
link[0].style.color = "black";

let h1 = document.querySelector("#title");
let p1 = document.querySelector(".txt");
let h2 = document.querySelectorAll("h2");
let a2 = document.querySelector("a[title='link2']");

let titolos = document.createElement("h2");
titolos.innerText = "hi there";
titolos.style.textTransform = "uppercase";
console.log(titolos);

let section = document.querySelector('section');
section.appendChild(titolos);
