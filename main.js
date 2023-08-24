const frontend = document.querySelector(".frontend");
const backend = document.querySelector(".backend");

frontend.addEventListener("mouseover", () => {
  console.log("frontend here");
  const h2 = frontend.firstElementChild;
  h2.textContent = "Frontend skills";
});

backend.addEventListener("mouseover", () => {
  console.log("backend here");
  const h2 = backend.firstElementChild;
  h2.textContent = "Backend skills";
});
