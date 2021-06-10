let taskTitle = document.querySelector("#taskTitle").value;
let taskDescription = document.querySelector("#taskDescription").value;
let taskAssignment = document.querySelector("#taskAssignment").value;
let dueDate = document.querySelector("#taskDueDate").value;
let taskStatus = document.querySelector("#inputState").value;
let errMsg = document.querySelector("#errMsg1");
let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", validFormInput );

function validFormInput () {
    if(taskTitle == "" || taskTitle.length < 5){
        errMsg.innerHTML = "The Title shouldn\'t be less than 5 characters";
        document.querySelector("#errMsg1").style.color = "#ff0000";
        taskTitle.focus(); // it will focus on the Task title input
    } else {
        errMsg.innerHTML = "OK to Submit";
    }
}

