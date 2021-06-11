class TaskManager {
    constructor (currentId = 0) {
        this.currentId = currentId;
        this.tasks;
    }
    
    addTask (name, dcrip, assign) {
        this.nameT = name;
        this.dcripT = dcrip;
        this.assignT = assign;
        this.currentId ++;
       
    };
    putIntoArray () {
        //this.tasks = new Array; 
        var array1 = new Array()
        array1.push(this.addTask());
        this.tasks = [{array1}];
        
    };
};


const obj = new TaskManager();
//let arr1 = new array[];
obj.addTask("HomeSite", "tastofvinh", "vinh");        

//obj.putIntoArray();
console.log(obj.nameT);
console.log(obj.dcripT);
console.log(obj.assignT);

//console.log(obj.addTask("HomeSite", "tastofvinh", "vinh"));
console.log(obj.currentId);
//console.log(obj.tasks);