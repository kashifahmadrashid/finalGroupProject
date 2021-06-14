class TaskManager {
    constructor (currentId = 0) {
        this.currentId = currentId;
        this.tasks = [];
    }
    
    addTask (name, dcrip, assign) {
        this.nameT = name;
        this.dcripT = dcrip;
        this.assignT = assign;
        this.currentId ++;
       
    };
    putIntoArray () {
        //this.tasks = new Array; 
        //var array1 = new Array()
        // this.tasks.push(task1);
        //this.tasks = array1;
        
    };
};


const obj = new TaskManager();
let arr1 = [];
obj.addTask("HomeSite", "tastofvinh", "vinh");        
var newtast = obj.addTask("HomeSite", "tastofvinh", "vinh"); 
// obj.putIntoArray(newtast);
console.log(obj.nameT);
console.log(obj.dcripT);
console.log(obj.assignT);

//console.log(obj.addTask("HomeSite", "tastofvinh", "vinh"));
arr1.push(newtast);
console.log(obj.currentId);
console.log(arr1[0]);
//console.log(array1)