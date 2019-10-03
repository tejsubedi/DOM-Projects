//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();


//load all event listeners
function loadEventListeners() {

    //DOM load event 
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear Task event
    clearBtn.addEventListener('click', clearTasks);

    //Filter Task event
    filter.addEventListener('keyup', filterTasks);

}

//Get Tasks from Local storage 



//Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }

    //create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element 
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';

    //Add icon html
    link.innerHTML = '<i class= "fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    //console.log(li);
    taskList.appendChild(li);

    //Store in Local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';


    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains
        ('delete-item')) {
        if (confirm('Are you sure? ')) {
            e.target.parentElement.parentElement.remove();
        }
    }

};

//clear tasks
function clearTasks() {
    //taskList.innerHTML ='';

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


    //https://jsperf.com/innerhtml-vs-removechild/47
}


//Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';

        } else {
            task.style.display = 'none';
        }
    });
}