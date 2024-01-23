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

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3!");
   
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4!");
   
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5!");
   
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6!");
   
    h6.appendChild(h6Text);
    div.appendChild(h6);
})