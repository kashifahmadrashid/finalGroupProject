const createTaskHTML = (newId, taskTitle, taskDescription, taskAssignment, taskDueDate, inputState) =>{
    const html = `
                <li class="card row" data-task-id="${newId}" style="min-width: 30vw ">
                    <div class="card-body">
                        <h5 class="card-title"><b>${taskTitle}</b></h5>
                        <p class="card-text">${taskDescription}</p>
                        <p class="card-text">Assigned To:${taskAssignment}</p>
                        <p class="card-text">Due By: ${taskDueDate}</p>
                        <div class="card-footer row">
                            <div class="col-6">
                                <p class="card-text"><b>Status:</b>${inputState}</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-success doneBtn ${inputState === "Done" ? "d-none" : ""}">
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

class TaskManager{

    constructor(currentId = 0){
        
        this.tasks = [];
        this.currentId = currentId;
    }
   
    
    addTask (taskTitle, taskDescription, taskAssignment, taskDueDate, inputState){
        const taskObject = {
            newId: this.currentId++,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskAssignment: taskAssignment,
            taskDueDate: taskDueDate,
            inputState: inputState,
        };
        this.tasks.push(taskObject);
        //console.log(this.tasks)
        return this.tasks;

    }
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
            const taskHtml = createTaskHTML (
                task.newId,
                task.taskTitle,
                task.taskDescription,
                task.taskAssignment,
                formattedDate, 
                task.inputState
            );
            //taskHtmlList.push(taskHtml);
            // console.log(this.tasks[i].newId);
            // console.log(taskHtml)
            if(task.inputState === "Done"){
                doneArray.push(taskHtml);
                taskHtmlList.push(taskHtml);
            }else if (task.inputState === "To Do"){
                todoArray.push(taskHtml);
                taskHtmlList.push(taskHtml);
            }else if (task.inputState === "Review"){
                reviewArray.push(taskHtml);
                taskHtmlList.push(taskHtml);
            }else if (task.inputState === "In Progress") {
                inprocessArray.push(taskHtml);
                taskHtmlList.push(taskHtml);
                };
                
            const doneHtml = doneArray.join("\n");
            const doneList = document.querySelector("#task-list1");
            doneList.innerHTML = doneHtml;
            const todoHtml = todoArray.join("\n");
            const todoList = document.querySelector("#task-list2");
            todoList.innerHTML = todoHtml;
            const inProcessHtml = inprocessArray.join("\n");
            
            const inProcessList = document.querySelector("#task-list3");
            inProcessList.innerHTML = inProcessHtml;
            const reviewHtml = reviewArray.join("\n");
            const reviewList = document.querySelector("#task-list4");
            reviewList.innerHTML = reviewHtml;
            const tasksHtml = taskHtmlList.join("\n");
            const tasksList = document.querySelector("#task-list0");
            tasksList.innerHTML = tasksHtml;
        };
            // const tasksHtml = taskHtmlList.join("\n");
            
            // const tasksList = document.querySelector("#task-list");
            
            // tasksList.innerHTML = tasksHtml;
    };
    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            if (task.newId === taskId){
                foundTask = task;
            }
        }
        return foundTask;
    };

    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("taskKey", tasksJson);
        const currentIdJson = String(this.currentId);
        localStorage.setItem("currentIdKey", currentIdJson);

    }

    load() {
        
        if (localStorage.getItem("taskKey")){
            const tasksJson = localStorage.getItem("taskKey");
            this.tasks = JSON.parse(tasksJson);
        }
        
        if (localStorage.getItem("currentIdKey")){
            const currentIdJson = localStorage.getItem("currentIdKey");
            this.currentId = Number(currentIdJson);
        }
    }

    deleteTask(taskId) {
        const newTasks = [];
        
        for (let i=0; i < this.tasks.length; i++){
           const task = this.tasks[i];
            if (task.newId !== taskId){
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
      
    }
    
   
};
    
    




    


