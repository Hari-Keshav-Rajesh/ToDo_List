import { formFunction } from "./Form/form";
import { projectsTableAdd } from "./Projects/projectsTable";

const content = document.querySelector(".content");

    const projectFactory = (title,description,dueDate,index) => {
        return{title,description,dueDate,index};
    };
 
    let Projects = [];

    let homeProjects = [];
    let workProjects = [];
    let otherProjects = [];

const addProjectButton = document.querySelector(".addProject");
addProjectButton.addEventListener('click',()=>{
    formFunction(projectFactory,Projects,homeProjects,workProjects,otherProjects);
}); 

