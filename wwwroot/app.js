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

function toggleDone(taskId) {
    for (const task of tasks) {
        if (task.id === taskId) {
            task.done = !task.done;
        }
    }
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    emptyMessage.style.display = tasks.length === 0 ? "block" : "none";

    for (const task of tasks) {
        const listItem = document.createElement("li");
        listItem.className = "task-item" + (task.done ? " task-done" : "");

        const dueDateNZ = new Date(task.dueDate).toLocaleDateString("en-NZ");

        listItem.innerHTML = `
            <div class="task-text">
                <span class="task-title">${task.title}</span>
                <span class="task-due">due ${dueDateNZ}</span>
            </div>
            <div class="task-buttons">
                <button class="btn-done">${task.done ? "Undo" : "Done"}</button>
                <button class="btn-delete">Delete</button>
            </div>
        `;

        listItem.querySelector(".btn-done").addEventListener("click", function () {
            toggleDone(task.id);
        });
        listItem.querySelector(".btn-delete").addEventListener("click", function () {
            deleteTask(task.id);
        });

        taskList.appendChild(listItem);
    }

    const doneCount = tasks.filter(function (task) { return task.done; }).length;
    taskCounter.textContent =
        `${tasks.length} task${tasks.length === 1 ? "" : "s"} · ${doneCount} completed`;
}

renderTasks();
