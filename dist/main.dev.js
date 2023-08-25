"use strict";

var container = document.querySelector("#image-holder");
var target = 0;
container.children[target].classList.toggle("display-block");

function image() {
  for (var i = 0; i < container.children.length; i++) {
    container.children[i].addEventListener("click", callback);
  }
}

function callback(e) {
  console.log(e.target);
  e.target.classList.toggle("display-block");

  if (target === container.children.length - 1) {
    target = 0;
  } else {
    target++;
  }

  container.children[target].classList.toggle("display-block");
}

image();