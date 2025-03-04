// To-Do List: Add a task at the end of the list. 
//             Insert a task at a specific position.
//             Updata a task.
//             Remove a task.
//             Display all the tasks.

class TaskNode {
    constructor(task) {
        this.task = task;
        this.next = null;
    }
}
// Task List using a Singly Linked List
class TaskList {
    constructor() {
        this.head = null;
    }
    // Add a new task to the end of the list
    addTask(task) {
        let newTask = new TaskNode(task);
        if (!this.head) {
            this.head = newTask;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newTask;
    }
        // Add a task at a specific position
    insertAt(task, position) {
        let newNode = new TaskNode(task);
        // If inserting at the beginning
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        // Traverse to the correct position
        while (current !== null && index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        // Insert the new node
        newNode.next = current;
        if (previous) {
            previous.next = newNode;
        }
    }
    // Update a task by finding its value
    updateTask(oldTask, newTask) {
        let current = this.head;
        while (current) {
            if (current.task === oldTask) {
                current.task = newTask; // Update the task value
                console.log(`Task updated: "${oldTask}" → "${newTask}"`);
                return;
            }
            current = current.next;
        }
        console.log(`Task "${oldTask}" not found.`);
    }
    // Remove a task by name
    removeTask(task) {
        if (!this.head) return;
        // If the task to remove is the first one
        if (this.head.task === task) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.task !== task) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
    // Display all tasks
    displayTasks() {
        let current = this.head;
        let tasks = "";
        while (current) {
            tasks += current.task + " -> ";
            current = current.next;
        }
        console.log(tasks + "null");
    }
}
// Example Usage:
let myTasks = new TaskList();

myTasks.addTask("Buy groceries");
myTasks.addTask("Complete project");
myTasks.addTask("Exercise");
myTasks.insertAt("Go to work!!!!", 2);

myTasks.updateTask("Exercise", "Work Out!!!!")
myTasks.updateTask("Enjoy your life.", "Kill yourself!!")

myTasks.displayTasks(); // Buy groceries -> Complete project -> Exercise -> null

//myTasks.removeTask("Complete project");

//myTasks.displayTasks(); // Buy groceries -> Exercise -> null