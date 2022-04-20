var buttonEl = window.document.querySelector("#save-task");
var tasksToDoEl = document.querySelector('#tasks-to-do');

console.dir(buttonEl);

function addTaskHandler() {
    
    // create element when button is clicked
    var taskItemEl = document.createElement("li");
    
    // to add a class to the created taskItemEl
    taskItemEl.className = "task-item";
    
    // to provide text within the created element
    taskItemEl.textContent = "hello";

    // To tie the taskItemEl to the tasksToDoEl variable 
    tasksToDoEl.appendChild(taskItemEl);
    
};

buttonEl.addEventListener("click", addTaskHandler);
