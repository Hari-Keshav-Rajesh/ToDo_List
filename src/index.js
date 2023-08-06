import "./main.css";

const content = document.querySelector(".content");

    const projects = (title,dueDate,description,priority) => {
        return{title,dueDate,description,priority};
    };

    const entry = projects('Test',12,'test','high');

    console.log(entry.title);