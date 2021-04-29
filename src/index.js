document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const formToDo = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
formToDo.addEventListener('submit', (e) => submitTask(e));

function submitTask(event)
{
  event.preventDefault();
  const task = input.value;
  //create a new task and add it to the list element
  const toDoList = document.getElementById('list');
  const taskToDo = document.createElement('li');
  taskToDo.innerText = task;
  toDoList.appendChild(taskToDo);
  input.value = "";
}
