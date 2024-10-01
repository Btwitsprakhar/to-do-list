function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}
