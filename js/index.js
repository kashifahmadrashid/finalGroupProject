const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render();
=======
const newTask = new TaskManager(0);
newTask.load();
newTask.render();




function validFormInput (e) {
    var allPassed = true;
    var GivenDate = taskDueDate.value;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);
    //CurrentDate = CurrentDate.
    
    if(taskTitle.value.trim() == "" || taskTitle.value.length < 5){
        errMsg1.innerHTML = "The Title shouldn\'t be less than 5 characters";
        document.querySelector("#errMsg1").style.color = "#ff0000";
        taskTitle.style.borderColor = "red";
        taskTitle.focus(); 
        allPassed = false;
            }else {
                errMsg1.innerHTML = "Looks Good";
                errMsg1.style.color = "green";
                taskTitle.style.borderColor = "green";
                // allPassed = true;
            }
    if(taskDescription.value.trim() == "" || taskDescription.value.length < 5){
        errMsg2.innerHTML = "The Task Title must be greater than 5 characters"
        document.querySelector("#errMsg2").style.color = "#ff0000"
        taskDescription.style.borderColor = "red";
        taskDescription.focus();
        allPassed = false;
            }else {
                errMsg2.innerHTML = "Looks Good";
                errMsg2.style.color = "green";
                taskDescription.style.borderColor = "green";
                // allPassed = true;
            }
    if(taskAssignment.value.trim() == "" || taskAssignment.value.length < 2){
        errMsg3.innerHTML = "Please assign task to someone";
        document.querySelector("#errMsg3").style.color = "#ff0000"
        taskAssignment.style.borderColor = "red";
        taskAssignment.focus();
        allPassed = false;
            }else {
                errMsg3.innerHTML = "Looks Good";
                errMsg3.style.color = "green";
                taskAssignment.style.borderColor = "green";
                // allPassed = true;
            }
    if(taskDueDate.value == "" || GivenDate < CurrentDate){
        errMsg4.innerHTML = "Please select a date after today";
        document.querySelector("#errMsg4").style.color = "#ff0000"
        taskDueDate.style.borderColor = "red";
        taskDueDate.focus();
        allPassed = false;
    }else if(GivenDate >= CurrentDate){
        errMsg4.innerHTML = "Looks Good";
        errMsg4.style.color = "green";
        taskDueDate.style.borderColor = "green";
    }
        
    if(taskStatus.value == ""){
        errMsg5.innerHTML = "Please select a task status";
        document.querySelector("#errMsg5").style.color = "#ff0000"
        taskStatus.style.borderColor = "red";
        taskStatus.focus();
        allPassed = false;
            }else {
                errMsg5.innerHTML = "Looks Good";
                errMsg5.style.color = "green";
                taskStatus.style.borderColor = "green";
                // allPassed = true;
            }
    const clearFormInput = () => {
        taskTitle.value="";
        taskTitle.style.borderColor = "grey"
        taskDescription.value="";
        taskDescription.style.borderColor = "grey"
        taskAssignment.value="";
        taskAssignment.style.borderColor = "grey"
        dueDate.value="";
        dueDate.style.borderColor = "grey"
        taskStatus.value="";
        taskStatus.style.borderColor = "grey"
        errMsg1.innerHTML = "";
        errMsg2.innerHTML = "";
        errMsg3.innerHTML = "";
        errMsg4.innerHTML = "";
        errMsg5.innerHTML = "";
    }
    if (allPassed) {
          
        taskManager.addTask(taskTitle.value, taskDescription.value, taskAssignment.value, taskDueDate.value, taskStatus.value)
        clearFormInput();   
        taskManager.save();
        taskManager.render();
    }
    
e.preventDefault();
}

// Get the Id of individual task
const taskList0 = document.querySelector("#task-list0");
taskList0.addEventListener("click",(event) => {
    if (event.target.classList.contains("doneBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const taskA = taskManager.getTaskById(taskId);
        taskA.Status = "Done";       
        taskManager.save();
        taskManager.render();
        //console.log(Number(event.target.id));
        //console.log(Number(taskId)); 
     }
    
     if (event.target.classList.contains("deleteBtn")) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
           // Delete the task
            taskManager.deleteTask(taskId);
            // location.reload()
            // Save the tasks to localStorage
            taskManager.save();
            // Render the tasks
            taskManager.render();
      }
    });

const taskList1 = document.querySelector("#task-list1");
taskList1.addEventListener("click",(event) => {
    if (event.target.classList.contains("doneBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const taskA = taskManager.getTaskById(taskId);
        taskA.Status = "Done";       
        taskManager.save();
        taskManager.render();
        //console.log(Number(event.target.id));
        //console.log(Number(taskId)); 
     }
    
     if (event.target.classList.contains("deleteBtn")) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
           // Delete the task
            taskManager.deleteTask(taskId);
            // location.reload()
            // Save the tasks to localStorage
            taskManager.save();
            // Render the tasks
            taskManager.render();
      }
    });
    const taskList2 = document.querySelector("#task-list2");
    taskList2.addEventListener("click",(event) => {
        if (event.target.classList.contains("doneBtn")){
            const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            const taskA = taskManager.getTaskById(taskId);
            taskA.Status = "Done";       
            taskManager.save();
            taskManager.render();
                   
            //console.log(taskManager.currentId);
            //console.log(taskA.objectId);
            //console.log(Number(event.target.id));
            //console.log(Number(taskId)); 
         }
        
         if (event.target.classList.contains("deleteBtn")) {
            // Get the parent Task
            const parentTask =
              event.target.parentElement.parentElement.parentElement.parentElement;
                // Get the taskId of the parent Task.
            const taskId = Number(parentTask.dataset.taskId);
               // Delete the task
                taskManager.deleteTask(taskId);
                // location.reload()
                // Save the tasks to localStorage
                taskManager.save();
                // Render the tasks
                taskManager.render();
          }
        });
        const taskList3 = document.querySelector("#task-list3");
        taskList3.addEventListener("click",(event) => {
            if (event.target.classList.contains("doneBtn")){
                const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                const taskId = Number(parentTask.dataset.taskId);
                const taskA = taskManager.getTaskById(taskId);
                taskA.Status = "Done";       
                taskManager.save();
                taskManager.render();
                       
                //console.log(taskManager.currentId);
                //console.log(taskA.objectId);
                //console.log(Number(event.target.id));
                //console.log(Number(taskId)); 
             }
            
             if (event.target.classList.contains("deleteBtn")) {
                // Get the parent Task
                const parentTask =
                  event.target.parentElement.parentElement.parentElement.parentElement;
                    // Get the taskId of the parent Task.
                const taskId = Number(parentTask.dataset.taskId);
                   // Delete the task
                    taskManager.deleteTask(taskId);
                    // location.reload()
                    // Save the tasks to localStorage
                    taskManager.save();
                    // Render the tasks
                    taskManager.render();
              }
            });

            const taskList4 = document.querySelector("#task-list4");
            taskList4.addEventListener("click",(event) => {
            if (event.target.classList.contains("doneBtn")){
                const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                const taskId = Number(parentTask.dataset.taskId);
                const taskA = taskManager.getTaskById(taskId);
                taskA.Status = "Done";       
                taskManager.save();
                taskManager.render();
                       
                //console.log(taskManager.currentId);
                //console.log(taskA.objectId);
                //console.log(Number(event.target.id));
                //console.log(Number(taskId)); 
             }
            
             if (event.target.classList.contains("deleteBtn")) {
                // Get the parent Task
                const parentTask =
                  event.target.parentElement.parentElement.parentElement.parentElement;
                    // Get the taskId of the parent Task.
                const taskId = Number(parentTask.dataset.taskId);
                   // Delete the task
                    taskManager.deleteTask(taskId);
                    // location.reload()
                    // Save the tasks to localStorage
                    taskManager.save();
                    // Render the tasks
                    taskManager.render();
              }
            });
=======
 
//form validation 
function validFormInput (e) {
    var allPassed = true;
    var givenDate = dueDate.value;
    var currentDate = new Date();
    givenDate = new Date (givenDate);
    //validation of Task Title
    if(taskTitle.value.trim() == "" || taskTitle.value.length < 5){
        errMsg1.innerHTML = "The Title must be greater than 5 characters";
        errMsg1.style.color = "#ff0000";
        taskTitle.style.borderColor = "#ff0000";
        taskTitle.focus(); 
        allPassed = false;
    } else {
        errMsg1.innerHTML = "Looks Good";
        errMsg1.style.color = "green";
        taskTitle.style.borderColor = "green";
    }
    //validation of Task Description
    if(taskDescription.value.trim() == "" || taskDescription.value.length < 5){
        errMsg2.innerHTML = "The Task Description must be greater than 5 characters"
        errMsg2.style.color = "#ff0000";
        taskDescription.style.borderColor = "#ff0000";
        taskDescription.focus();
        allPassed = false;
    }else {
        errMsg2.innerHTML = "Looks Good";
        errMsg2.style.color = "green";
        taskDescription.style.borderColor = "green";
    }
    //validation of Task Assignment
    if(taskAssignment.value.trim() == "" || taskAssignment.value.length < 2){
        errMsg3.innerHTML = "Please assign task to someone";
        errMsg3.style.color = "#ff0000";
        taskAssignment.style.borderColor = "#ff0000";
        taskAssignment.focus();
        allPassed = false;
    }else {
        errMsg3.innerHTML = "Looks Good";
        errMsg3.style.color = "green";
        taskAssignment.style.borderColor = "green";
       
    }
    //validation of task date
    if(dueDate.value == "" || givenDate < currentDate){
        errMsg4.innerHTML = "Please select a  valid date from the calendar";
        errMsg4.style.color = "#ff0000";
        dueDate.style.borderColor = "#ff0000";
        dueDate.focus();
        allPassed = false;
    }else if (givenDate >= currentDate){
        errMsg4.innerHTML = "Looks Good";
        errMsg4.style.color = "green";
        taskDueDate.style.borderColor = "green";
       
    }
    //validation of task status
    if(taskStatus.value == "Status" || taskStatus.value == ""){
        errMsg5.innerHTML = "Please select a task status";
        errMsg5.style.color="#ff0000";
        taskStatus.style.borderColor = "#ff0000";
        taskStatus.focus();
        allPassed = false;
    }else {
        errMsg5.innerHTML = "Looks Good";
        errMsg5.style.color = "green";
        taskStatus.style.borderColor = "green";
        
    }

    if (allPassed){
        newTask.addTask(taskTitle.value, taskDescription.value, taskAssignment.value, taskDueDate.value, taskStatus.value)
        taskTitle.value = "";
		taskDescription.value = "";
		taskAssignment.value = "";
		dueDate.value = "";
		taskStatus.value = "";
        errMsg1.innerHTML = "";
		errMsg2.innerHTML = "";
		errMsg3.innerHTML = "";
		errMsg4.innerHTML = "";
		errMsg5.innerHTML = "";
        taskTitle.style.borderColor = "grey";
        taskDescription.style.borderColor = "grey";
        taskAssignment.style.borderColor = "grey";
        taskDueDate.style.borderColor = "grey";
        taskStatus.style.borderColor = "grey";
    }
    const taskHtml = createTaskHTML(
			taskTitle.value,
			taskDescription.value,
			taskAssignment.value,
			taskDueDate.value,
			taskStatus.value
		);
		console.log(taskHtml);
        
  
    newTask.save();
    newTask.render();
e.preventDefault();
}

//get the id of the individual task
const taskList0 = document.querySelector("#task-list0");
taskList0.addEventListener("click", (event) => {
    if (event.target.classList.contains("doneBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const taskA = newTask.getTaskById(taskId);
        taskA.inputState = "Done";
        newTask.save();
        newTask.render();
    }
    //task deletion 
    if (event.target.classList.contains("deleteBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        newTask.deleteTask(taskId);
        newTask.save();
        newTask.render();
    }
});

const taskList1 = document.querySelector("#task-list1");
taskList1.addEventListener("click", (event) => {
    if (event.target.classList.contains("doneBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number (parentTask.dataset.taskId);
        const taskA = newTask.getTaskById(taskId);
        taskA.inputState = "Done";
        newTask.save();
        newTask.render();
    }

    if (event.target.classList.contains("deleteBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        newTask.deleteTask(taskId);
        location.reload();
        newTask.save();
        newTask.render();
    }
});
const taskList2 = document.querySelector("#task-list2");
taskList2.addEventListener("click", (event) => {
	if (event.target.classList.contains("doneBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		const taskA = newTask.getTaskById(taskId);
		taskA.inputState = "Done";
		newTask.save();
		newTask.render();
	}

	if (event.target.classList.contains("deleteBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		newTask.deleteTask(taskId);
		
        newTask.save();
		newTask.render();
	}
});

const taskList3 = document.querySelector("#task-list3");
taskList3.addEventListener("click", (event) => {
	if (event.target.classList.contains("doneBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		const taskA = newTask.getTaskById(taskId);
		taskA.inputState = "Done";
		newTask.save();
		newTask.render();
	}

	if (event.target.classList.contains("deleteBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		newTask.deleteTask(taskId);
		
        newTask.save();
		newTask.render();
	}
});

const taskList4 = document.querySelector("#task-list4");
taskList4.addEventListener("click", (event) => {
	if (event.target.classList.contains("doneBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		const taskA = newTask.getTaskById(taskId);
		taskA.inputState = "Done";
		newTask.save();
		newTask.render();
	}

	if (event.target.classList.contains("deleteBtn")) {
		const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
		const taskId = Number(parentTask.dataset.taskId);
		newTask.deleteTask(taskId);
		newTask.save();
		newTask.render();
	}
});


// const taskList = document.querySelector("#task-list");

// taskList.addEventListener("click",(event) => {
    
//     if (event.target.classList.contains("doneBtn")){
       
//     const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    
//     const taskId = Number(parentTask.dataset.taskId);
    
//     const task = newTask.getTaskById(taskId);
    
//     task.inputState = "Done";
    
          
//     newTask.save();

// 	newTask.render();
//     }


//     if (event.target.classList.contains("deleteBtn")){
//         const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
//         const taskId = Number(parentTask.dataset.taskId);
//         newTask.deleteTask(taskId);
//         newTask.save();
//         newTask.render();
// 	}

// });





