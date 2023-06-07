function userInput(){
    const taskInput= document.getElementById('taskInput');
    const addTaskButton= document.getElementById('addTaskButton');
    let tasklist =document.getElementById('taskList');



}

    let taskArray = getTasksFromLoalStorage();
    function getTasksFromLoalStorage() {
        return Json.parse(localStorage.getItem('tasks')) || [];
    }
    function updateTasksInLocalStorage(){
        localStorage.sdetItem('tasks' , Json.stringify(taskArray));
    }
    function creatTask(taskText) {
        return {text:taskText, completed:false };
    }

    const removeButton = document.creatTask("buttom");

    removeButton.classList.add("removeButton");
    
    removeButton.addEventListener ("click", function(){
        deleteTask(taskObj);
        renderTasks();
    });
     
    function createTaskElement(taskObj) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("taskItem");
      
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = taskObj.completed;
        checkbox.addEventListener("change", function () {
          taskObj.completed = checkbox.checked;
          taskTextElement.classList.toggle("completed", taskObj.completed);
          updateTasksInLocalStorage();
        });
      
        const taskTextElement = document.createElement("span");
        taskTextElement.classList.add("taskText");
        taskTextElement.textContent = taskObj.text;
        taskTextElement.classList.toggle("completed", taskObj.completed);
      
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";
        removeButton.addEventListener("click", function () {
          deleteTask(taskObj);
          renderTasks();
        });
      
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(removeButton);
      
        return taskItem;
      }
      