const createTaskHTML = (newId, taskTitle, taskDescription, taskAssignment, taskDueDate, inputState) =>{
    const html = `
                <li class="card" data-task-id="${newId}" style="min-width: 30vw">
                    <div class="card-body">
                        <h5 class="card-title"><b>${taskTitle}</b></h5>
                        <p class="card-text">${taskDescription}</p>
                        <p class="card-text">Assigned To:${taskAssignment}</p>
                        <p class="card-text">Due By: ${taskDueDate}</p>
                        <div class="card-footer row">
                            <div class="col-6">
                                <p class="card-text"><b>Status:</b> ${inputState}</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-outline-success doneBtn">
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
        const newTask = {
            newId: this.currentId++,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskAssignment: taskAssignment,
            taskDueDate: taskDueDate,
            inputState: inputState,
        };
        this.tasks.push(newTask);
        console.log(this.tasks)
        //return this.tasks;

    };
    render (){
        const taskHtmlList = [];
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
            taskHtmlList.push(taskHtml);
        }
            const tasksHtml = taskHtmlList.join("\n");
            
            const tasksList = document.querySelector("#task-list");
            
            tasksList.innerHTML = tasksHtml;
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
}


    


