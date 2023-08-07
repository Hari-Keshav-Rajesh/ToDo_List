import "./main.css";

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

    const form = document.createElement("form");
    form.classList.add("form");
    content.appendChild(form);

        const labelTitle = document.createElement("label");
        labelTitle.textContent = "Title"
        labelTitle.setAttribute("for","title");
        form.appendChild(labelTitle);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type","text");
        inputTitle.setAttribute("name","title");
        inputTitle.setAttribute("id","title");
        form.appendChild(inputTitle);

        const labelDesc = document.createElement("label");
        labelDesc.textContent = "Description"
        labelDesc.setAttribute("for","description");
        form.appendChild(labelDesc);

        const inputDesc = document.createElement("input");
        inputDesc.setAttribute("type","text");
        inputDesc.setAttribute("name","description");
        inputDesc.setAttribute("id","description");
        form.appendChild(inputDesc);

        const labelDate = document.createElement("label");
        labelDate.textContent = "Date"
        labelDate.setAttribute("for","dueDate");
        form.appendChild(labelDate);

        const inputDate = document.createElement("input");
        inputDate.setAttribute("type","date");
        inputDate.setAttribute("name","dueDate");
        inputDate.setAttribute("id","dueDate");
        form.appendChild(inputDate);

        const submitButton = document.createElement("button");
        submitButton.setAttribute("type","submit");
        submitButton.textContent = "Add";
        submitButton.classList.add("submitButton");
        form.appendChild(submitButton);


        const radioButtons = document.createElement("div");
        radioButtons.classList.add("radioButtons");

        const radioText = document.createElement("div");
        radioText.classList.add("radioText");
        radioText.textContent = "Select Type of work";
        radioButtons.appendChild(radioText);
        
        const homeLabel = document.createElement("label");
        homeLabel.htmlFor = "home";
        homeLabel.textContent = "Home";
        radioButtons.appendChild(homeLabel);

        const homeButton =  document.createElement("input");
        homeButton.type = "radio";
        homeButton.value = "home";
        homeButton.name = "radio";
        homeButton.id = "home";
        radioButtons.appendChild(homeButton);

        const workLabel = document.createElement("label");
        workLabel.htmlFor = "work";
        workLabel.textContent = "Work";
        radioButtons.appendChild(workLabel);

        const workButton =  document.createElement("input");
        workButton.type = "radio";
        workButton.value = "work";
        workButton.name = "radio";
        workButton.id = "work";
        radioButtons.appendChild(workButton);

        const otherLabel = document.createElement("label");
        otherLabel.htmlFor = "other";
        otherLabel.textContent = "Other";
        radioButtons.appendChild(otherLabel);

        const otherButton =  document.createElement("input");
        otherButton.type = "radio";
        otherButton.value = "other";
        otherButton.name = "radio";
        otherButton.id = "other";
        radioButtons.appendChild(otherButton);

        const confirmButton = document.createElement("button");
        confirmButton.classList.add("confirmButton");
        confirmButton.textContent = "Confirm";
        radioButtons.appendChild(confirmButton);


        submitButton.addEventListener('click',(event)=>{
            event.preventDefault();
            Projects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value));
            content.removeChild(form);
            content.appendChild(radioButtons);
        });

        confirmButton.addEventListener('click',(event)=>{
            event.preventDefault();
            if(homeButton.checked){
                homeProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value));
                content.removeChild(radioButtons);
            }
            else if(workButton.checked){
                workProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value));
                content.removeChild(radioButtons);
            }
            else if(otherButton.checked){
                otherProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value));
                content.removeChild(radioButtons);
            }
            else{
                alert("Please select an option");
            }
        });

}); 

const check = document.createElement("button");
content.appendChild(check);
check.textContent = "CHECK";
check.addEventListener("click",()=>{
    console.log(Projects);
    console.log(homeProjects);
    console.log(workProjects);
    console.log(otherProjects);
});

