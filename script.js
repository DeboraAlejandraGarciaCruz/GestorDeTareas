document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
});
