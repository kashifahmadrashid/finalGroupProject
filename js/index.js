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

function validFormInput () {
    if(taskTitle.value == "" || taskTitle.value.length < 5){
        errMsg1.innerHTML = "The Title shouldn\'t be less than 5 characters!";
        document.querySelector("#errMsg1").style.color = "#ff0000";
        taskTitle.focus(); // it will focus on the Task title input
    } else {
        errMsg1.innerHTML = "Look Good";
    }
    if(taskDescription.value == "" || taskDescription.value.length < 5){
        errMsg2.innerHTML = "The description should be more than 5 characters!"
        document.querySelector("#errMsg2").style.color = "#ff0000"
        taskDescription.focus();
    }else {
        errMsg2.innerHTML = "Looks Good";
    }
    if(taskAssignment.value == "" || taskAssignment.value.length < 2){
        errMsg3.innerHTML = "Please assign task to someone!";
        document.querySelector("#errMsg3").style.color = "#ff0000"
        taskAssignment.focus();
    }else {
        errMsg3.innerHTML = "Looks Good";
    }
    if(taskDueDate.value == ""){
        errMsg4.innerHTML = "Please select a date from the calendar!";
        document.querySelector("#errMsg4").style.color = "#ff0000"
        taskDueDate.focus();
    }else {
        errMsg4.innerHTML = "Looks Good";
    }
    if(taskStatus.value == "Status"){
        errMsg5.innerHTML = "Please select a task status!";
        document.querySelector("#errMsg5").style.color = "#ff0000"
        taskStatus.focus();
    }else {
        errMsg5.innerHTML = "Looks Good";
    }
}
