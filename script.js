const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckedCount = 0;
let tareas = [];


class Tarea {
  constructor(titulo) {
    this.titulo = titulo;
    this.terminada = false;  
  } 
}


function toggleBox(event) {
  this.terminada = event.target.checked;
  renderizar();
} 


function addTodo() {
  let titulo = prompt("Ingrese el titulo de la tarea:");
  let tarea = new Tarea(titulo);
  tareas.push(tarea);

  renderizar();
}
  

function renderizar() {
  list.innerHTML = "";

  tareas.map ((tarea) => {
    let li = document.createElement('li');
    li.className = classNames.TODO_ITEM;
    
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classNames = classNames.TODO_CHECKBOX;
    checkBox.checked = tarea.terminada;
    checkBox.onchange = toggleBox.bind(tarea);
  
    let span = document.createElement('span');
    span.className = classNames.TODO_TEXT;
    span.innerHTML = tarea.titulo;
  
    li.appendChild(checkBox);
    li.appendChild(span);
    list.appendChild(li);    
  })

  itemCountSpan.innerHTML = tareas.length;
  
  let unchecked = 0;
  tareas.map((tarea) => {
    if (!tarea.terminada) {
      unchecked++;
    }
  });
  uncheckedCountSpan.innerHTML = unchecked;

}

