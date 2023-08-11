import { formFunction } from "./Form/form";
import { projectsTableAdd } from "./Projects/projectsTable";

const content = document.querySelector(".content");

const projectFactory = (title,description,dueDate,index) => {
    return{title,description,dueDate,index};
};

const projectsTable = document.createElement("table");
projectsTable.classList.add("projectsTable");
content.appendChild(projectsTable);
 
    let Projects = [];

    let homeProjects = [];
    let workProjects = [];
    let otherProjects = [];

const addProjectButton = document.querySelector(".addProject");
addProjectButton.addEventListener('click',()=>{
    formFunction(projectFactory,Projects,homeProjects,workProjects,otherProjects);
}); 

const projectsButton = document.querySelector(".projects");
projectsButton.addEventListener('click',()=>{
    content.innerHTML='';
    content.appendChild(projectsTable);
});

const homeButton = document.querySelector(".home");
homeButton.addEventListener('click',()=>{
    content.innerHTML='';
});

