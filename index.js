let button = document.querySelector("button");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");

function handleButton() {
  projects.style.display === "none" ? showProjects() : showAbout();
}
function showProjects() {
  projects.style.display = "flex";
  about.style.display = "none";
  button.innerText = "<";
}

function showAbout() {
  about.style.display = "flex";
  projects.style.display = "none";
  button.innerText = ">";
}
