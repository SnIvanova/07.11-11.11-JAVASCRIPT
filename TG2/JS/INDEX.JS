console.log(window);
console.log(window.document);
console.dir(window.document);
let title = window.document.getElementById("first").innerHTML = "Hello World!";
console.log(title); //innertext = "Hello World!"
title.style.textdecoration = "underline";