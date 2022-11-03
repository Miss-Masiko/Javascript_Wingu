class Tasks {

    constructor(){
        this._todos = [];
    }

    get task(){

        return this._todos;
    }

    set taskTitle(text){
        if(isNaN(text)){
            this._todos = text; //If the condition is true
        }else {
            console.log("This shouldn't be a number"); // if the condition is false
        }
    }

    addTasks(taskName){

    const addValue = this._todos.push(taskName);

    return addValue;
    }
}

// instatiation of your class

const object = new Tasks();

function newTask(event) {

    event.preventDefault();

    const value = document.querySelector("#task").value;

    object.addTasks(value);

    // console.log(object);

    document.querySelector("#text").innerHTML = object.task;


}