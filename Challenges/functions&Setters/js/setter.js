class Tasks {

    constructor(task){
        this._task = ' ';
    }

    get task(){

        return this._task;
    }

    set taskTitle(text){
        if(isNaN(text)){
            this._task = text; //If the condition is true
        }else {
            console.log("This shouldn't be a number"); // if the condition is false
        }
    }

}

// instatiation of your class

const object = new Tasks();

function newTask(event) {

    event.preventDefault();

    const value = document.querySelector("#task").value;

    object.taskTitle = value;

    console.log(object);

    document.querySelector("#text").innerHTML = object.task;


}