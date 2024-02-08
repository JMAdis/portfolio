function generateProjects(){
    const container = document.getElementById("projectContainer");

    const numProjects = 4;

    for (let i = 1; i <= numProjects; i++){
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("projectsgroup__proj1");
        const projectImage = document.createElement("img");
    projectImage.src = "./components/placeholder-box.png";
    projectImage.alt = "Placeholder";
    projectImage.classList.add("projectsgroup__proj1--image");

    // Create project title
    const projectTitle = document.createElement("p");
    projectTitle.classList.add("projectsgroup__proj1--title");
    projectTitle.textContent = "Project " + i;

    // Create skills container
    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("projectsgroup__proj1--skills");

    // Create skill categories (you can loop through an array of skills)
    const skill1 = document.createElement("a");
    skill1.href = "#";
    skill1.classList.add("projectsgroup__proj1--skillscat");
    skill1.textContent = "React";

    const skill2 = document.createElement("a");
    skill2.href = "#";
    skill2.classList.add("projectsgroup__proj1--skillscat");
    skill2.textContent = "SCSS";

    // Append elements to the project container
    skillsContainer.appendChild(skill1);
    skillsContainer.appendChild(skill2);

    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(skillsContainer);

    // Append the project container to the main container
    container.appendChild(projectDiv);
  }
}

win