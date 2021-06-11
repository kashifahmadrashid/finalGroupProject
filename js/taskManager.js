class TaskManager{
    constructor(taskTitle, description, assingment, dueDate, status){
        this.tasks = [];
    }
}





let submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', addTask)

function addTask () {
    var card = document.createElement('p');
    card.innerText = taskTitle.value;
    tasks.appendChild(card);
    taskTitle.value ="";

}
card.addEventListener("dblclick", function(){
    tasks.removeChild(card);
})
