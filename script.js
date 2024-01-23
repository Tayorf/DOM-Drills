document.addEventListener('DOMContentLoaded' , function () {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container";
   
    document.body.appendChild(div); // Places the <div class="header-container"> tag into the <body> element.

    let h1 = document.createElement("h1"); // Creates an <h1> element.
    let h1Text = document.createTextNode("This is an h1!");
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2!");
   
    h2.appendChild(h2Text);
    div.appendChild(h2);
})