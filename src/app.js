console.log("work javascript in page")
let globalTodos = [];

function printTodos(){
    const ul = document.querySelector('.todos');
    let content = "";
    globalTodos.forEach(function(item){
        console.log("Content", content);
        content += `<li>${item}<button class="boton" onClick='remove("${item}")'> Eliminar </button></li>`;
    });

    if(globalTodos.length === 0) content += '<li class="first-li">Sin tareas añadidas<li>';
    content = content + `<li><input class= 'first-input' placeholder= 'escribe algo aqui!!' type='text' onfocusout="addTodo(value)" /><li>`;
    ul.innerHTML = content;
}

function add(label){
    globalTodos.push(label);
    printTodos();
}

function remove(label){
    globalTodos = globalTodos.filter(l => l !== label);
    printTodos();
}

function addTodo(label){
    globalTodos.push(label);
    printTodos();
}

window.addTodo = addTodo;
printTodos();


