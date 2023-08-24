"use strict";

var frontend = document.querySelector(".frontend");
var backend = document.querySelector(".backend");
frontend.addEventListener("mouseover", function () {
  console.log("frontend here");
  var h2 = frontend.firstElementChild;
  h2.textContent = "Frontend skills";
});
backend.addEventListener("mouseover", function () {
  console.log("backend here");
  var h2 = backend.firstElementChild;
  h2.textContent = "Backend skills";
});