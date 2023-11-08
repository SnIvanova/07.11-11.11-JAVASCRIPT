  /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
       const h1 = document.querySelector('h1');
       const changeTitle = function (change) {
         h1.innerText = change
       };
       changeTitle ("new title")
 
       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
         h1.classList.add("myHeading");}
       addClassToTitle();
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
       const changePcontent = function (newtext) {
       const pElements = document.querySelectorAll("div > p");
 
       pElements.forEach(function(p) {
         p.innerText = newtext;
       });
     }
 
     changePcontent("new content");
 
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
       const links = document.querySelectorAll("a:not(footer a)");
 
       links.forEach(function(link) {
       link.href = "https://www.google.com";
         });
       }
 
     changeUrls();
 
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
     const addToTheSecond = function () {
       const sList = document.querySelector("#secondList");
       const newListItem = document.createElement("li");
       newListItem.textContent = "New Item";
       sList.appendChild(newListItem);
     }
 
     addToTheSecond();
 
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
     const addParagraph = function (paragraphText) {
     const firstDiv = document.querySelector("div:first-of-type");
     const newParagraph = document.createElement("p");
     newParagraph.textContent = paragraphText;
     firstDiv.appendChild(newParagraph);
     }
 
     addParagraph("This is a new paragraph.");
 
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
     /*  const hideFirstUl = function () {
         const plista = document.querySelector("ul:first-of-type")
         plista.remove()
 
       }
       hideFirstUl(); */
       const hideFirstUl = function () {
       const firstUl = document.querySelector("ul:first-of-type");
       firstUl.style.display = 'none';
       }
 
         hideFirstUl();
 
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
         const greenback = document.querySelectorAll('ul');
         greenback.forEach((ul)=>{
          ul.style.backgroundColor = 'green';})
        
       }
       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
       const removeButton = document.createElement("button");
       removeButton.innerHTML = 'remove';
       removeButton.classList.add("complete-btn");
 
       const h1 = document.querySelector("h1");
 
       removeButton.addEventListener('click', function() {
         const text = h1.textContent;
         h1.textContent = text.slice(0, -1);
       });
 
       document.body.appendChild(removeButton);
       }
 
       makeItClickable();
 
 
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
         const footerLink = document.querySelector("footer a");
         footerLink.addEventListener("click", function(event) {
           event.preventDefault();
           alert(footerLink.href);
         });
       }
 
       revealFooterLink();
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
     const generateTable = function () {
     const products = [
         { immagine: "immagine1.jpg", nomeprodotto: "Product 1", quantità: 3, prezzo: 10.99 },
         { immagine: "immagine2.jpg", nomeprodotto: "Product 2", quantità: 2, prezzo: 19.99 },
     ];
     const tableArea = document.getElementById("tableArea");
     const table = document.createElement("table");
     const headers = ["immagine", "nomeprodotto", "quantità", "prezzo"];
     const thead = table.createTHead();
     const tbody = table.createTBody();
 
 
     const createTableHeaders = () => {
         const row = thead.insertRow();
         headers.forEach(header => {
             let th = document.createElement('th');
             let text = document.createTextNode(header);
             th.appendChild(text);
             row.appendChild(th);
         });
     }
 
     const createTableRows = () => {
         products.forEach(product => {
             const row = tbody.insertRow();
             row.innerHTML = `<td><img src="${product.immagine}"></td><td>${product.nomeprodotto}</td><td>${product.quantità}</td><td>$${product.prezzo.toFixed(2)}</td>`;
         });
     }
 
     createTableHeaders();
     createTableRows();
     tableArea.appendChild(table);
 };
 
 generateTable();
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
         const addRow = function (newProduct) {
         const table = document.querySelector("#tableArea table");
         const tbody = table.tBodies[0];
         const row = tbody.insertRow();
         row.innerHTML = `<td><img src="${newProduct.immagine}"></td><td>${newProduct.nomeprodotto}</td><td>${newProduct.quantità}</td><td>$${newProduct.prezzo.toFixed(2)}</td>`;
         };
       addRow({ immagine: "image6.jpg", nomeprodotto: "Product 6", quantità: 6, prezzo: 29.99 });
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
       const hideAllImages =  function hideImages() {
        var images = document.querySelectorAll("#tableArea table img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        }
    
    hideImages()
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}