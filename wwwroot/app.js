const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDueInput = document.querySelector("#task-due");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const taskCounter = document.querySelector("#task-counter");

let tasks = [];

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTask = {
        id: Date.now(),
        title: taskTitleInput.value.trim(),
        dueDate: taskDueInput.value,
        done: false
    };

    tasks.push(newTask);
    renderTasks();

    taskForm.reset();
    taskTitleInput.focus();
});

function renderTasks() {
    taskList.innerHTML = "";

    for (const task of tasks) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        const dueDateNZ = new Date(task.dueDate).toLocaleDateString("en-NZ");

        listItem.innerHTML = `
            <div class="task-text">
                <span class="task-title">${task.title}</span>
                <span class="task-due">due ${dueDateNZ}</span>
            </div>
        `;

        taskList.appendChild(listItem);
    }
}
renderTasks();
