
// Declare function createTaskHTML
const createTaskHTML = (Id, taskTitle, taskDescription, taskAssignment, taskDueDate, inputStatus) =>{
    const html = `
                <li class="card" data-task-id="${Id}" style="min-width: 30vw">
                    <div class="card-body a">
                        <h5 class="card-title"><b>${taskTitle}</b></h5>
                        <p class="card-text">${taskDescription}</p>
                        <p class="card-text">Assigned To:${taskAssignment}</p>
                        <p class="card-text">Due By: ${taskDueDate}</p>
                        <div class="card-footer row b">
                            <div class="col-6">
                                <p class="card-text" id="${inputStatus}"><b>Status:</b> ${inputStatus}</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-success doneBtn" type="button" id="${Id}">
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
        const taskObject = {
            objectId: this.currentId++,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskAssignment: taskAssignment,
            taskDueDate: taskDueDate,
            Status: taskStatus,
        };
        this.tasks.push(taskObject);
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
            //console.log(this.tasks[i].Status)
            const taskHtml = createTaskHTML (task.objectId, task.taskTitle, task.taskDescription, task.taskAssignment,
                                            formattedDate, task.Status);
            //console.log(task); 
            //  console.log(this.tasks[i].Status); 
            //  console.log(this.tasks[i].newId); 
              //console.log(taskHtml)
                const doneArray = [];
                const reviewArray = [];
                const inprocessArray = [];
                const todoArray = [];
             for (let i=0; i<this.tasks.length; i++){
                const tasks = this.tasks[i];
                if(this.tasks[i].Status === "Done"){
                    //button.id.style.display="none";
                    doneArray.push(tasks);
                    console.log(tasks.objectId)              
                   //document.getElementById("id").style.display="none";
                    //console.log(task);
                    //console.log(this.tasks[i].newId);
                } else if(this.tasks[i].Status === "To Do") {
                    todoArray.push(tasks);
                    } else if(this.tasks[i].Status === "Review") {
                        reviewArray.push(tasks);
                        } else if(this.tasks[i].Status === "In Process") {
                            inprocessArray.push(tasks);
                            }                 
             }   
            // Push it to the tasksHtmlList array                                
             taskHtmlList.push(taskHtml);  
            }          
            // for(let i=0; i<this.tasks.length; i++) {
            // if(this.tasks[i].Status == "Done") {
            //         document.getElementById("id").style.display="none";
            // };        
            // };
            // Create the tasksHtml by joining each item in the tasksHtmlList
            // with a new line in between each item.
            const tasksHtml = taskHtmlList.join("\n");
            const tasksList = document.querySelector("#task-list");
            tasksList.innerHTML = tasksHtml;
            
        
    };

    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.objectId === taskId){
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
          if (task.objectId !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
            
          }
        }
        // Set newTasks to this.tasks
        this.tasks = newTasks;
        
      }
};




