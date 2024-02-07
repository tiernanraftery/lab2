let Tasks: Array<string> = [];

function addTask(task: string): number {
    let length: number;
    length = Tasks.push(task);
    console.log(task + " has been added to our task array.")
    return length;
}

function listAllTasks(): void {
    Tasks.forEach(function (element) {
        console.log("Task " + element + " is on our Task Array. ");
    })
}

function deleteTask(task: string): number {
    let index: number;
    index = Tasks.indexOf(task);

    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been removed from our Array. ");
    } else {
        console.log(task + " was not found in our task Array. ");
    }
    return Tasks.length;
}

addTask("Eat Lunch");
listAllTasks();
deleteTask("Eat Lunch");