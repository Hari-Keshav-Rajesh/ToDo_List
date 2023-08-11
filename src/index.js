import { formFunction } from "./Form/form";
import { projectsTableAdd } from "./Projects/projectsTable";

const content = document.querySelector(".content");

const projectFactory = (title,description,dueDate,index) => {
    return{title,description,dueDate,index};
};

const projectsTable = document.createElement("table");
projectsTable.classList.add("projectsTable");
content.appendChild(projectsTable);

const homeTable = document.createElement("table");
homeTable.classList.add("homeTable");
content.appendChild(homeTable);

const workTable = document.createElement("table");
workTable.classList.add("workTable");
content.appendChild(workTable);

const otherTable = document.createElement("table");
otherTable.classList.add("otherTable");
content.appendChild(otherTable);

 
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
    projectsTable.style.display = 'block';
    homeTable.style.display = 'none';
    workTable.style.display = 'none';
    otherTable.style.display = 'none';
});

const homeButton = document.querySelector(".home");
homeButton.addEventListener('click',()=>{
    homeTable.style.display = 'block';
    projectsTable.style.display = 'none';
    workTable.style.display = 'none';
    otherTable.style.display = 'none';
});

const workButton = document.querySelector(".work");
workButton.addEventListener('click',()=>{
    workTable.style.display = 'block';
    homeTable.style.display = 'none';
    projectsTable.style.display = 'none';
    otherTable.style.display = 'none';
});

const otherButton = document.querySelector(".others");
otherButton.addEventListener('click',()=>{
    otherTable.style.display = 'block';
    homeTable.style.display = 'none';
    workTable.style.display = 'none';
    projectsTable.style.display = 'none';
});