function clickedButton() {
    console.log('O botão foi clicado');
  }
  
  function addNewTask() {
    let input = document.querySelector('#newTask');
    let tasklist = document.querySelector('#tasklist');
  
    let newTask = input.value;
    input.value = '';
    //console.log(newTask);
  
    let listItem = document.createElement('li');
    listItem.textContent = newTask;
  
    tasklist.appendChild(listItem);
  }
  
  
  document.querySelector('#btnAddTask').addEventListener('click', addNewTask)
  document.querySelector('#btnAddTask').addEventListener('change', displayValue)
  document.querySelector('#btnAddTask').addEventListener('change', displayValue)
  