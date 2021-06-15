let taskTitle = document.querySelector("#taskTitle");
let taskDescription = document.querySelector("#taskDescription");
let taskAssignment = document.querySelector("#taskAssignment");
let dueDate = document.querySelector("#taskDueDate");
let taskStatus = document.querySelector("#inputState");
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", validFormInput );

class taskManager {
    constructor (currentId = 0) {
        this.tasksArray = [];
        this.currentId = currentId;
    }
    
    addTask (id, name1, dcript, assign) {
        class taskData {
            constructor (id, name, dcript, assign) {
                this.id = id + 1 ;
                this.nameT = name;
                this.dcripT = dcript;
                this.assignT = assign;
            }
        }
        this.taskObject = new taskData(this.currentId, name1, dcript, assign);
        this.tasksArray.push(this.taskObject);
        this.currentId = this.currentId + 1;
    };
};

let taskManagerObj = new taskManager();
let array1 = taskManagerObj.addTask(taskManagerObj.currentId, "aa", "bb", "cc")