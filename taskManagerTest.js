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
let array2 = taskManagerObj.addTask(taskManagerObj.currentId, "aa", "bb", "cc")
let array3 = taskManagerObj.addTask(taskManagerObj.currentId, "aa", "bb", "cc")
let array4 = taskManagerObj.addTask(taskManagerObj.currentId, "aa", "bb", "cc")
// function array1() {
//  if()
// }
console.log(taskManagerObj.taskObject.nameT);
console.log(taskManagerObj.taskObject.dcripT);
console.log(taskManagerObj.taskObject.assignT);

console.log(taskManagerObj.tasksArray);
// console.log(taskManagerObj.currentId);
// console.log(taskManagerObj.taskObject.id)
// console.log(taskManagerObj.tasksArray[0].taskData.nameT);