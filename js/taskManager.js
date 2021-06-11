class TaskManager{
    constructor(taskTitle, description, assignment, dueDate, status){
        
        this.task = taskTitle;
        this.description = description;
        this.assignment = assignment;
        this.dueDate = dueDate;
        this.status = status;
        
    }

}
const arrayTest = [];
const newTask = new TaskManager('dinner', 'dinner with friends', 'kashif', 12/6/2021, 'in Progress' )
console.log(arrayTest.push(newTask));
// const taskList = new TaskManager();
// console.log(taskList)
// console.log(taskList.tasks)