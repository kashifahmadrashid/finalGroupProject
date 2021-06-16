const newTask = new TaskManager(0);

let taskTitle = document.querySelector("#taskTitle");
let taskDescription = document.querySelector("#taskDescription");
let taskAssignment = document.querySelector("#taskAssignment");
let dueDate = document.querySelector("#taskDueDate");
let taskStatus = document.querySelector("#inputState");
let errMsg1= document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", validFormInput );



function validFormInput (e) {
    var allPassed = true;
    if(taskTitle.value.trim() == "" || taskTitle.value.length < 5){
        errMsg1.innerHTML = "The Title shouldn\'t be less than 5 characters";
        document.querySelector("#errMsg1").style.color = "#ff0000";
        taskTitle.focus(); 
        allPassed = false;
    } else {
        errMsg1.innerHTML = "Looks Good";
    }
    if(taskDescription.value.trim() == "" || taskDescription.value.length < 5){
        errMsg2.innerHTML = "The Task Title must be greater than 5 characters"
        document.querySelector("#errMsg2").style.color = "#ff0000"
        taskDescription.focus();
        allPassed = false;
    }else {
        errMsg2.innerHTML = "Looks Good";
    }
    if(taskAssignment.value.trim() == "" || taskAssignment.value.length < 2){
        errMsg3.innerHTML = "Please assign task to someone";
        document.querySelector("#errMsg3").style.color = "#ff0000"
        taskAssignment.focus();
        allPassed = false;
    }else {
        errMsg3.innerHTML = "Looks Good";
    }
    if(taskDueDate.value == ""){
        errMsg4.innerHTML = "Please select a date from the calendar";
        document.querySelector("#errMsg4").style.color = "#ff0000"
        taskDueDate.focus();
        allPassed = false;
    }else {
        errMsg4.innerHTML = "Looks Good";
    }
    if(taskStatus.value == "Status"){
        errMsg5.innerHTML = "Please select a task status";
        document.querySelector("#errMsg5").style.color = "#ff0000"
        taskStatus.focus();
        allPassed = false;
    }else {
        errMsg5.innerHTML = "Looks Good";
    }
    if (allPassed){
        newTask.addTask(taskTitle.value, taskDescription.value, taskAssignment.value, taskDueDate.value, taskStatus.value)
    }
    const taskHtml = createTaskHTML(
			taskTitle.value,
			taskDescription.value,
			taskAssignment.value,
			taskDueDate.value,
			taskStatus.value
		);
		console.log(taskHtml);
        newTask.render();

    taskTitle.value="";
    taskDescription.value="";
    taskAssignment.value="";
    dueDate.value="";
    taskStatus.value="";
    
e.preventDefault();
}

const taskList = document.querySelector("#task-list");


taskList.addEventListener("click",(event) => {
    if (event.target.classList.contains("doneBtn")){
      
    
    const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    
    
    const taskId = Number(parentTask.dataset.taskId);
    
    const task = newTask.getTaskById(taskId);
    
    task.inputState = "Done";
    
    newTask.render();
}
});




