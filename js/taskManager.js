
// Declare function createTaskHTML
const createTaskHTML = (Id, taskTitle, taskDescription, taskAssignment, taskDueDate, inputStatus) =>{
    const html = `
                <li class="card" data-task-id="${Id}" style="min-width: 30vw">
                    <div class="card-body">
                        <h5 class="card-title"><b>${taskTitle}</b></h5>
                        <p class="card-text">${taskDescription}</p>
                        <p class="card-text">Assigned To:${taskAssignment}</p>
                        <p class="card-text">Due By: ${taskDueDate}</p>
                        <div class="card-footer row">
                            <div class="col-6">
                                <p class="card-text"><b>Status:</b> ${inputStatus}</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-success doneBtn" id="${Id}">
                                    Done
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-danger deleteBtn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </li>`;
              return html;
};

// Declar TaskManager class
class TaskManager{
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
    // addTask method of TaskManager class
    addTask (taskTitle, taskDescription, taskAssignment, taskDueDate, taskStatus){
        const newTask = {
            newId: this.currentId++,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskAssignment: taskAssignment,
            taskDueDate: taskDueDate,
            Status: taskStatus,
        };
        this.tasks.push(newTask);
        //console.log(this.tasks)
        return this.tasks;
    }; 
    // End TaskManager lass
    render (){
        const taskHtmlList = [];
        for (let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            const date = new Date (task.taskDueDate);
            const formattedDate = 
            date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
            const taskHtml = createTaskHTML (task.newId, task.taskTitle, task.taskDescription, task.taskAssignment,
                                            formattedDate, task.Status);
                                     
            // Push it to the tasksHtmlList array                                
            taskHtmlList.push(taskHtml);  
            }        
            // Create the tasksHtml by joining each item in the tasksHtmlList
            // with a new line in between each item.
            const tasksHtml = taskHtmlList.join("\n");
            const tasksList = document.querySelector("#task-list");
            tasksList.innerHTML = tasksHtml;
            // for(let i=0; i<this.tasks.length; i++) {
                            
            //                 if(this.tasks[i].inputStatus==="Done") {
            //                     document.getElementById("Id").style.display="none";
            //                 }
            //                     }
        
    };

    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.newId === taskId){
                foundTask = task;
            }
        }
        return foundTask;   
    };
    
    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);
    
        // Store the JSON string in localStorage
        localStorage.setItem("tasks", tasksJson);
    
        // Convert the currentId to a string;
        const currentId = String(this.currentId);
    
        // Store the currentId in localStorage
        localStorage.setItem("currentId", currentId);
      }
    
      load() {
        // Check if any tasks are saved in localStorage
        if (localStorage.getItem("tasks")) {
          // Get the JSON string of tasks in localStorage
          const tasksJson = localStorage.getItem("tasks");
    
          // Convert it to an array and store it in our TaskManager
          this.tasks = JSON.parse(tasksJson);
        }
    
        // Check if the currentId is saved in localStorage
        if (localStorage.getItem("currentId")) {
          // Get the currentId string in localStorage
          const currentId = localStorage.getItem("currentId");
    
          // Convert the currentId to a number and store it in our TaskManager
          this.currentId = Number(currentId);
        }
      }
      deleteTask(taskId) {
        // Create an empty array and store it in a new variable, newTasks
        const newTasks = [];
    
        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
          // Get the current task in the loop
          const task = this.tasks[i];
    
          // Check if the task id is not the task id passed in as a parameter
          if (task.newId !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
          }
        }
    
        // Set this.tasks to newTasks
        this.tasks = newTasks;
        
      }
};

// for(let i=0; i<taskHtmlList.length; i++);{
            //     const taskA = taskHtmlList[i];
            //     if(taskA.inputStatus==="Done") {
            //         document.getElementsByClassName("btn").style.display="none";
            //     }
            //         }


