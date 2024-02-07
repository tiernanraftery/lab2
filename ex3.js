var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var length;
        length = this.Tasks.push(task);
        console.log(task + " has been added to our task array.");
        return length;
    };
    Tasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (element) {
            console.log("Task " + element + " is on our Task Array. ");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index;
        index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from our Array. ");
        }
        else {
            console.log(task + " was not found in our task Array. ");
        }
        return this.Tasks.length;
    };
    return Tasks;
}());
var myTodos = new Tasks();
myTodos.addTask("Eat");
myTodos.listAllTasks();
myTodos.deleteTask("Eat Lunch");
