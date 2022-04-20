var formEl = document.querySelector('#task-form')
var tasksToDoEl = document.querySelector('#tasks-to-do');


function addTaskHandler(event) {

    event.preventDefault();
    
    // create element when button is clicked
    var taskItemEl = document.createElement("li");
    
    // to add a class to the created taskItemEl
    taskItemEl.className = "task-item";
    
    // to provide text within the created element
    taskItemEl.textContent = "hello";

    // To tie the taskItemEl to the tasksToDoEl variable 
    tasksToDoEl.appendChild(taskItemEl);
    
};

// runs function addTaskHandler() when clicked
formEl.addEventListener("submit", addTaskHandler);
