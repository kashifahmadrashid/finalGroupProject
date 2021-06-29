
// Declare function createTaskHTML
const createTaskHTML = (Id, taskTitle, taskDescription, taskAssignment, taskDueDate, inputStatus) =>{
    const html = `
                <li class="card" data-task-id="${Id}" style="min-width: 30vw">
                    <div class="card-body">
                        <h6 class="card-title"><b>${taskTitle}</b></h6>
                        <p class="card-text">${taskDescription}</p>
                        <p class="card-text">Assigned To:${taskAssignment}</p>
                        <p class="card-text">Due By: ${taskDueDate}</p>
                        <div class="card-footer row b">
                            <div class="col-6">
                                <p class="card-text" id="${inputStatus}"><b>Status:</b> ${inputStatus}</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-success doneBtn ${inputStatus === 'Done' ? 'd-none' : ''}" type="button">
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
        const doneArray = [];
        const todoArray = [];
        const reviewArray = [];
        const inprocessArray = [];
        for (let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            const date = new Date (task.taskDueDate);
            const formattedDate = 
            date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
            //console.log(this.tasks[i].Status)
            const taskHtml = createTaskHTML (task.objectId, task.taskTitle, task.taskDescription, task.taskAssignment,
                                            formattedDate, task.Status);
            // taskHtmlList.push(taskHtml);             
            // console.log(this.tasks[i].objectId); 
            // console.log(taskHtml)                    
                  if(task.Status === "Done"){
                    //button.id.style.display="none";
                    doneArray.push(taskHtml);
                    taskHtmlList.push(taskHtml);
                    //console.log(this.tasks.objectId)              
                    } else if(task.Status === "To Do") {
                        todoArray.push(taskHtml);
                        taskHtmlList.push(taskHtml);
                        } else if(task.Status === "Review") {
                                reviewArray.push(taskHtml);
                                taskHtmlList.push(taskHtml);
                            } else if(task.Status === "In Process") {
                                    inprocessArray.push(taskHtml);
                                    taskHtmlList.push(taskHtml);
                                    };                 
            
                                    
            const doneHtml = doneArray.join("\n");
            const doneList = document.querySelector("#task-list1");
            doneList.innerHTML = doneHtml;
            // add the TodoHtml to todoListHTML
            const todoHtml = todoArray.join("\n");
            const todoList = document.querySelector("#task-list2");
            todoList.innerHTML = todoHtml;
            //add the inProcessHtml to inProcessListHTML
            const inProcessHtml = inprocessArray.join("\n");
            console.log(inprocessArray);
            const inProcessList = document.querySelector("#task-list3");
            inProcessList.innerHTML = inProcessHtml;
            //add the reviewHtml to reviewListHTML
            const reviewHtml = reviewArray.join("\n");
            const reviewList = document.querySelector("#task-list4");
            reviewList.innerHTML = reviewHtml;
            // with a new line in between each item.
            const tasksHtml = taskHtmlList.join("\n");
            // Set the inner html of the tasksList on the page
            const tasksList = document.querySelector("#task-list0");
            tasksList.innerHTML = tasksHtml;  
            
    };    
             
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




