const addTodoForm = document.getElementById('add-todo');
const newTodoInput = document.getElementById('new-todo');
const todosList = document.getElementById('todos');

addTodoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTodo = newTodoInput.value;
  if (!newTodo) {
    return;
  }

  const todoItem = document.createElement('li');
  const todoText = document.createElement('span');
  const todoButton = document.createElement('button');

  todoText.innerText = newTodo;
  todoButton.innerText = 'Delete';

  todoItem.appendChild(todoText);
  todoItem.appendChild(todoButton);

  todosList.appendChild(todoItem);

  newTodoInput.value = '';

  todoButton.addEventListener('click', function() {
    todoItem.remove();
  });
});
