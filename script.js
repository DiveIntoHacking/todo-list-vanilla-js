console.log('Hello, JavaScript!');

const todoList = document.getElementById('todo-list');
const newItem = document.getElementById('new-item');

const todoItems = [];

const addItem = () => {
  todoItems.push({
    done: false,
    description: newItem.value,
  });
  newItem.value = '';
  todoList.innerHTML = showTodoItems(todoItems);
};

const listen = (items) => {
  return items.map(({ description, done }) => {
    return `<li onclick="console.log('onclick')">${description}</li>`;
  });
};

const showTodoItems = (items) => {
  return `<ol>${listen(items).join('')}</ol>`;
};

todoList.innerHTML = showTodoItems(todoItems);
