const createTaskHTML = (taskTitle, taskDescription, taskAssignment, taskDueDate, inputState) =>{
    const html = `<li class="list-group-item">
                <div class="card">
                  <div class="card-body d-flex w-100 justify-content-between">
                        <div>
                          <h5 class="card-title" id="taskHeading" >${taskTitle}</h5>
                          <textarea class="form-control" id="taskDescription">${taskDescription}</textarea>
                          <p class="card-text" id="taskAssign">${taskAssignment}</p>
                          
                        </div>
                  <div>
                  <div>
                        <p class="card-text">${taskDueDate}</p>
                        <p class="card-text">${inputState}</p>
                  </div>
                  <div class="mt-3">
                        <a href="#" class="btn btn-primary">Details</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                  </div>
                </div>
               </li> `;
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
        return this.tasks;

    };
    render (){
        const taskHtmlList = [];
        for (let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            const date = new Date (task.taskDueDate);
            const formattedDate = 
            date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
            const taskHtml = createTaskHTML (
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
        }
}


    


