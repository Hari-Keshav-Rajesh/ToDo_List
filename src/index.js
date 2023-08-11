import { formFunction } from "./Form/form";

const content = document.querySelector(".content");

    const projectFactory = (title,description,dueDate) => {
        return{title,description,dueDate};
    };

    let Projects = [];

    let homeProjects = [];
    let workProjects = [];
    let otherProjects = [];

const addProjectButton = document.querySelector(".addProject");
addProjectButton.addEventListener('click',()=>{
    formFunction(projectFactory,Projects,homeProjects,workProjects,otherProjects);
}); 

const check = document.createElement("button");
check.textContent = "check";
content.appendChild(check);
check.addEventListener('click',()=>{
    console.log(Projects);
    console.log(homeProjects);
    console.log(workProjects);
    console.log(otherProjects);
});