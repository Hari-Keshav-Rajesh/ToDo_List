const projectsTableAdd = (Projects) => {

    const content = document.querySelector(".content");

        var projectsBox = document.createElement("div");
        projectsBox.classList.add("projectsBox");
        content.appendChild(projectsBox);
        
            var textBox = document.createElement("div");
            textBox.classList.add("textBox");
            projectsBox.appendChild(textBox);

                var titleText = document.createElement("div");
                titleText.classList.add("titleText");
                titleText.textContent = `${Projects[(Projects.length) -1].title}`;
                textBox.appendChild(titleText);


                var descText = document.createElement("div");
                descText.classList.add("descText");
                descText.textContent = `${Projects[(Projects.length) -1].description}`;
                textBox.appendChild(descText);


            var dateText = document.createElement("div");
            dateText.classList.add("dateText");
            dateText.textContent = `${Projects[(Projects.length) -1].dueDate}`;
            projectsBox.appendChild(dateText);

            var removeButton = document.createElement("button");
            removeButton.classList.add("removeButton");
            removeButton.textContent = "Remove";
            projectsBox.appendChild(removeButton);
            removeButton.addEventListener('click',()=>{
                content.removeChild(projectsBox);
                Projects.splice(Projects.length-1);
            });

}


export {projectsTableAdd};