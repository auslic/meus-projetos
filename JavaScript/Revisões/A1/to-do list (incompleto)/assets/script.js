var task_description = document.getElementById ('task_input')
var add_task = document.getElementById ('task_button')
var task = document.getElementById ('task')
var checkbox = '<input type="checkbox">'

add_task.addEventListener("click", function(){
    task.innerHTML = checkbox + task_description
})