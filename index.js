function nextCard() {
  let button = document.getElementById("button");
  let header = document.querySelector(".container.content h2");
  let paragraph = document.querySelector(".container.content p");

  let aboutHeader = "About Me";
  let aboutContent =
    "I am a System Administrator and Software Developer with a passion for solving complex problems. " +
    "I specialize in optimizing system performance, enhancing security, and ensuring smooth operations. " +
    "By staying up-to-date with emerging technologies, I deliver strategic solutions that streamline " +
    "processes and increase efficiency. I am looking to contribute my expertise and drive organizational " +
    "success in today's dynamic digital landscape.";

  let projectHeader = "Projects";
  let projectContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at hendrerit elit, non interdum erat. " +
    "Praesent egestas eleifend turpis, non dignissim diam dapibus quis. Lorem ipsum dolor sit amet, " +
    "consectetur adipiscing elit. ";

  header.textContent === projectHeader
    ? (header.textContent = aboutHeader)
    : (header.textContent = projectHeader);

  paragraph.textContent === projectContent
    ? (paragraph.textContent = aboutContent)
    : (paragraph.textContent = projectContent);

  button.textContent === "<"
    ? (button.textContent = ">")
    : (button.textContent = "<");

  let projectDiv = document.getElementById("project-div");

  !projectDiv ? addProjects() : removeProjects(projectDiv);
}

function addProjects() {
  let container = document.querySelector(".container");
  let div = document.createElement("div");
  div.setAttribute("id", "project-div");
  div.textContent = "TEST";
  container.appendChild(div);
}

function removeProjects(projectDiv) {
  projectDiv.remove();
}
