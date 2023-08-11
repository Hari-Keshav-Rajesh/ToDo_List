import "./projectsTable.css";

const projectsTableAdd = (Projects,projectsTable) => {

        var projectsBox = document.createElement("div");
        projectsBox.classList.add("projectsBox");
        projectsTable.appendChild(projectsBox);
         
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
            dateText.innerHTML = `Due Date<br>${Projects[(Projects.length) -1].dueDate}`;
            projectsBox.appendChild(dateText);

            var removeButton = document.createElement("button");
            removeButton.classList.add("removeButton");
            removeButton.textContent = "Done";
            projectsBox.appendChild(removeButton);
            removeButton.addEventListener('click',()=>{
                let removeIndex = Projects[Projects.length-1].index;
                projectsTable.removeChild(projectsBox);
                Projects.splice(removeIndex,1);
                for(let i=removeIndex;i<Projects.length;i++){
                    Projects[i].index -= 1;
                }
            });

}


export {projectsTableAdd};