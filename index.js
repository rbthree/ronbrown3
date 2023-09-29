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
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("id", "project-div");
  container.appendChild(projectDiv);
  let project = document.createElement("div");
  project.textContent = "TEST";
  projectDiv.appendChild(project);
}

function removeProjects(projectDiv) {
  projectDiv.remove();
}
