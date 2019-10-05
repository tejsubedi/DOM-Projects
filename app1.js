const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);


}

//Add Task
function addTask(event) {
    event.preventDefault();

    if (taskInput.value === '') {
        alert('Add a Task!');
    }

    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = "delete-item";
    const button = document.createElement('button');
    button.className = "delete-button";
    button.innerHTML = 'Delete';
    link.appendChild(button);
    li.appendChild(link);
    taskList.appendChild(li);

    console.log(taskList);
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure? ')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks() {
    //taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

