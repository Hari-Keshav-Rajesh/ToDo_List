import "./projectsTable.css";

const projectsTableAdd = (Projects,projectsTable,homeProjects,homeTable) => {
 
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
                let homeremoveIndex = homeProjects[homeProjects.length-1].index;
                    homeTable.removeChild(homeprojectsBox);
                    homeProjects.splice(homeremoveIndex,1);
                    for(let i=homeremoveIndex;i<homeProjects.length;i++){
                        homeProjects[i].index -= 1;
                    }
            });
            var homeprojectsBox = document.createElement("div");
            homeprojectsBox.classList.add("projectsBox");
            homeTable.appendChild(homeprojectsBox);
             
                var hometextBox = document.createElement("div");
                hometextBox.classList.add("textBox");
                homeprojectsBox.appendChild(hometextBox);
    
                    var hometitleText = document.createElement("div");
                    hometitleText.classList.add("titleText");
                    hometitleText.textContent = `${homeProjects[(homeProjects.length) -1].title}`;
                    hometextBox.appendChild(hometitleText);
    
    
                    var homedescText = document.createElement("div");
                    homedescText.classList.add("descText");
                    homedescText.textContent = `${homeProjects[(homeProjects.length) -1].description}`;
                    hometextBox.appendChild(homedescText);
    
    
                var homedateText = document.createElement("div");
                homedateText.classList.add("dateText");
                homedateText.innerHTML = `Due Date<br>${homeProjects[(homeProjects.length) -1].dueDate}`;
                homeprojectsBox.appendChild(homedateText);
    
                var homeremoveButton = document.createElement("button");
                homeremoveButton.classList.add("removeButton");
                homeremoveButton.textContent = "Done";
                homeprojectsBox.appendChild(homeremoveButton);
                homeremoveButton.addEventListener('click',()=>{
                    let removeIndex = Projects[Projects.length-1].index;
                    projectsTable.removeChild(projectsBox);
                    Projects.splice(removeIndex,1);
                    for(let i=removeIndex;i<Projects.length;i++){
                        Projects[i].index -= 1;
                    }
                    let homeremoveIndex = homeProjects[homeProjects.length-1].index;
                    homeTable.removeChild(homeprojectsBox);
                    homeProjects.splice(homeremoveIndex,1);
                    for(let i=homeremoveIndex;i<homeProjects.length;i++){
                        homeProjects[i].index -= 1;
                    }
                });

}


export {projectsTableAdd};