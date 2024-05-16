//your code here

document.getElementById('addTodoBtn').addEventListener('click', () => {
  const todoText = inputField.value.trim(); 
  if (todoText) {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    todoList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
  }
});