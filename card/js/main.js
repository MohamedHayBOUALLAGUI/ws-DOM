//getElementById
let title1 = document.getElementById("title");
//see in the console the different outputs
console.log("ById:", title1);
console.log("querySelector:", document.querySelector("#title"));
console.log("innerHTML:", title1.innerHTML);
console.log("innerText:", title1.innerText);
console.log("textContent:", title1.textContent);
//change the title
title1.innerHTML = "Beja est la perle du nord ouest";
//getElementsByTagName
let tagName = document.getElementsByTagName("div");
console.log("tagName:", tagName);
// getElementsByClassName card-body
let className = document.getElementsByClassName("card-body");
console.log(className);
console.log(document.querySelectorAll(".card-body"));
//createElement "btn"
let btn = document.createElement("button");
console.log(btn);
btn.innerHTML = "click me!";
//get the empty div with card-body class +append the button to it
tagName[2].appendChild(btn);
//add classes to the button using setAttribute
btn.setAttribute("class", "btn btn-outline-success");
//change the title by title 2
let title2 = document.createElement("h3");
console.log("title2", title2);
title2.innerText = "Beja is the pearl of north ouest";
tagName[1].replaceChild(title2, title1);
//get element by querySelector div
let querSelect = document.querySelector("div");
console.log("querySelector:", querSelect);
//get element by querySelectorAll
let querAll = document.querySelectorAll(".card-body");
console.log("querySelectorAll:", querAll);
//changing title color(style with js) element.style.property='value'
title2.style.color = "blue";
title2.style.fontSize = "20px";
title2.style.fontFamily = "Roboto";
//add event listener click i
btn.addEventListener("click", function () {
  let book = document.querySelector("i");
  book.classList.contains("icon-left")
    ? book.classList.toggle("icon-right")
    : null;
});
