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







































/*function exibirAlerta() {
    alert('Números primo');
}*/
 

 /* Número Primo*/
/*let numero = prompt("Digite número")
let divisores=0;

for(let count=1 ; count<=numero ; count++){
 if(numero % count == 0)
   divisores++;
}

if(divisores==2)
  console.log('É primo');
else
console.log('Não é primo');*/