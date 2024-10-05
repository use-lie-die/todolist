document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const addButton = document.getElementById('add-button');
    const recordsList = document.getElementById('records-list');

    addButton.addEventListener('click', () => {
      const text = inputField.value.trim();
      if (text === '') return;

      const listItem = document.createElement('li');
      listItem.textContent = text;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Удалить';
      deleteButton.addEventListener('click', () => {
        recordsList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteButton);
      recordsList.appendChild(listItem);
  
      inputField.value = '';
    });
  });