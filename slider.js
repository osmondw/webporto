const months =
["January","February","March","April","May","June","July","August","September","October","November","December"];

const lang = navigator.language;
const d = new Date();
let month = months[getMonth()];
let daynumber = d.getDate();
let dayname = d.toLocaleDateString(lang,{weekday:'long'});
document.querySelector('.month').innerHTML = month;
document.querySelector('.date').innerHTML = dayname + ','  + daynumber+ 'th';

const taskinput = document.querySelector('.task-input');
const taskaddbtn = document.querySelector('.add-task-btn');
let filter = document.querySelectorAll('.tasks-menu-container span');
const checkbox = document.querySelector('.checkbox');
const todos = JSON.parse(localStorage.getItem("todo-list")) || "[]";
let UpdateId;
let isUpdate=false;

filter.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('span.active').classList.remove('active');
        btn.classList.add('active');
        showTodos(btn.id);
    })
})

function showTodos(filter){
    document.querySelectorAll(".task-list").forEach(todo => todo.remove());
    let liTag='';
    todos.forEach((todo,id)=>{
        let isCompleted = todo.status == 'completed'? 'checked':'';
        if(filter==todo.status || filter =='all'){
            liTag += '<div class="task-list">
            <label for="${id}">
                <input onclick="taskcomplete(this)" type="checkbox" id=${id}" class="checkbox" onclick="taskcomplete(this)"

        }
    })
}