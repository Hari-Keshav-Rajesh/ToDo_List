import "./form.css";
import { projectsTableAdd } from "../Projects/projectsTable";

const formFunction = (projectFactory,Projects,homeProjects,workProjects,otherProjects) => {
    const content = document.querySelector(".content");
    content.classList.add('content');

    const form = document.createElement("form");
    form.classList.add("form"); 
    content.appendChild(form); 

        const title = document.createElement("div");
        title.classList.add("title","input");
        form.appendChild(title);

            const labelTitle = document.createElement("label");
            labelTitle.textContent = "Title"
            labelTitle.setAttribute("for","title");
            title.appendChild(labelTitle);

            const inputTitle = document.createElement("input");
            inputTitle.setAttribute("type","text");
            inputTitle.setAttribute("name","title");
            inputTitle.setAttribute("id","title");
            title.appendChild(inputTitle);

        const description = document.createElement("div");
        description.classList.add("description","input");
        form.appendChild(description);

            const labelDesc = document.createElement("label");
            labelDesc.textContent = "Note"
            labelDesc.setAttribute("for","description");
            description.appendChild(labelDesc);

            const inputDesc = document.createElement("input");
            inputDesc.setAttribute("type","text");
            inputDesc.setAttribute("name","description");
            inputDesc.setAttribute("id","description");
            description.appendChild(inputDesc);

        const date = document.createElement("div");
        date.classList.add("date","input");
        form.appendChild(date);
            const labelDate = document.createElement("label");
            labelDate.textContent = "Date"
            labelDate.setAttribute("for","dueDate");
            date.appendChild(labelDate);

            const inputDate = document.createElement("input");
            inputDate.setAttribute("type","date");
            inputDate.setAttribute("name","dueDate");
            inputDate.setAttribute("id","dueDate");
            date.appendChild(inputDate);

        const formButtons = document.createElement("div");
        formButtons.classList.add("formButtons");
        form.appendChild(formButtons);

            const submitButton = document.createElement("button");
            submitButton.setAttribute("type","submit");
            submitButton.textContent = "Add";
            submitButton.classList.add("submitButton");
            formButtons.appendChild(submitButton);

            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancelButton");
            formButtons.appendChild(cancelButton);

        const radio = document.createElement("div");
        radio.classList.add("radio");

            const radioText = document.createElement("div");
            radioText.classList.add("radioText");
            radioText.textContent = "Select Type of work";
            radio.appendChild(radioText);
            
            const radioButtons = document.createElement("div");
            radioButtons.classList.add("radioButtons");
            radio.appendChild(radioButtons);

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
            radio.appendChild(confirmButton);


        submitButton.addEventListener('click',(event)=>{
            event.preventDefault();
            if((inputTitle.value === '')===true){
                alert("Please enter all details");   
            }
            else if((inputDesc.value === '')===true){
                alert("Please enter all details");  
            }
            else if((inputDate.value === '')===true){
                alert("Please enter all details");   
            }
            else{
                Projects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value,Projects.length));
                content.removeChild(form);
                content.appendChild(radio);
            }
        });

        cancelButton.addEventListener('click',()=>{
            content.removeChild(form);
        });


        confirmButton.addEventListener('click',(event)=>{
            event.preventDefault();
            if(homeButton.checked){
                homeProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value,homeProjects.length));
                content.removeChild(radio);
                projectsTableAdd(Projects);
            }
            else if(workButton.checked){
                workProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value,workProjects.length));
                content.removeChild(radio);
                projectsTableAdd(Projects);
            }
            else if(otherButton.checked){
                otherProjects.push(projectFactory(inputTitle.value,inputDesc.value,inputDate.value,otherProjects.length));
                content.removeChild(radio);
                projectsTableAdd(Projects);
            }
            else{
                alert("Please select an option");
            }
        });
}

export {formFunction};