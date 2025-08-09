const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
  outputTodo();
}

function outputTodo() {
  let todolistHtml = '';
  for(let i = 0; i<todoList.length; i++) {
    const value = todoList[i];
    const html = `<p>${value}<p>`;
    todolistHtml += html;
  }
  document.querySelector('.js-todo-output').innerHTML = todolistHtml;
}