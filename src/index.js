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

