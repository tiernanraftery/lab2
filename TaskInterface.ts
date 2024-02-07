export interface tasksInterface {
    Tasks: Array<string>;
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;

}