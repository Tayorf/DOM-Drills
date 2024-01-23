document.addEventListener('DOMContentLoaded' , function () {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container";
   
    document.body.appendChild(div); // Places the <div class="header-container"> tag into the <body> element.
   
    let h1 = document.createElement("h1"); // Creates an <h1> element.
    let h1Text = document.createTextNode("This is an h1!");
   h1.className='h1';
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2!");
    h2.className='h2';
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3!");
    h3.className='h3';
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4!");
    h4.className='h4';
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5!");
    h5.className='h5';
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6!");
    h6.className='h6';
    h6.appendChild(h6Text);
    div.appendChild(h6);

    let color = ["brown", "blue", "green", "orange", "purple", "red", "yellow", "pink"];

    h1.addEventListener("dblclick", function () {
        h1.style.color = color[Math.floor(Math.random() * color.length)]
    });

    h2.addEventListener("dblclick", function () {
        h2.style.color = color[Math.floor(Math.random() * color.length)]
    });

    h3.addEventListener("dblclick", function () {
        h3.style.color = color[Math.floor(Math.random() * color.length)]
    });

    h4.addEventListener("dblclick", function () {
        h4.style.color = color[Math.floor(Math.random() * color.length)]
    });

    h5.addEventListener("dblclick", function () {
        h5.style.color = color[Math.floor(Math.random() * color.length)]
    });

    h6.addEventListener("dblclick", function () {
        h6.style.color = color[Math.floor(Math.random() * color.length)]
    });

    let ul = document.createElement('ul');
    ul.className = "ul";
    document.body.appendChild(ul);
    let count = 1;
    let btn = document.getElementsByClassName('btn');

    btn[0].addEventListener('click', function () {
        let text = document.createTextNode("This is list item " + count);
        let li = document.createElement('li');
        li.appendChild(text);
        li.className = "items";
        li.id = count;
        ul.appendChild(li);
        count = count + 1
        li.addEventListener('click', function () {
            li.style.color = color[Math.floor(Math.random() * color.length)]
        })
        li.addEventListener('dblclick', function () {
            li.parentNode.removeChild(li);
        })
    });
})