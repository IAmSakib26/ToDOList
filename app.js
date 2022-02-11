//Selectors
const todoInput = document.querySelector('.todoinput');
const todoBtn = document.querySelector('.todobtn');
const todoList = document.querySelector('.todolist');
const filter = document.querySelector('.filter');

//Event listner
todoBtn.addEventListener('click', addTodoList);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filters);

//Functions
function addTodoList(event){
    //EventPrevent
    event.preventDefault();
    //Create todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoitem');
    todoDiv.appendChild(newTodo);
    //Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completedbtn');
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashedButton = document.createElement('button');
    trashedButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashedButton.classList.add('trashedbtn');
    todoDiv.appendChild(trashedButton);
    //Append List
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
}
function deleteCheck(e){
    const item = e.target;
    //delete Todo
     if(item.classList[0]=== 'trashedbtn'){
         const todo = item.parentElement;
         todo.classList.add('fall');
         todo.addEventListener('transitionend', function(){
             todo.remove();
         });
     }

     //Check Mark
     if(item.classList[0]=== 'completedbtn'){
         const todo = item.parentElement;
         todo.classList.toggle('completed');
     }
}

function filters(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}