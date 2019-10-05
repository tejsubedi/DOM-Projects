const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');


//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTasks);


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

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })

}

