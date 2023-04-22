var todoInput = document.querySelector("input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

btn.onclick = createTodo;
todoList.onclick = PerformActions;


function createTodo(e){
    e.preventDefault();

    var data = todoInput.value;

    if (data != ""){
        var newDiv = document.createElement ('div')
        newDiv.classList.add("todo")

        var newLi = document.createElement('li')
        newLi.innerHTML = data

        var doneBtn = document.createElement('button')
        doneBtn.classList.add ('doneBtn')
        doneBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

        var delBtn = document.createElement('button')
        delBtn.classList.add ('delBtn')
        delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

        newDiv.appendChild(newLi)
        newDiv.appendChild(doneBtn)
        newDiv.appendChild(delBtn)

        todoList.appendChild(newDiv)

        todoInput.value="";
    }
    else
    {
        alert("Task Field is Empty - Enter task details")
    }
}

// doneBtn.onclick = Completed;

// function Completed (e) {
//     preventDefault();

// }

function PerformActions(e){
 var item = e.target  
//  console.log(e.target)
if(item.classList[0]=='doneBtn')
{
    // console.log("Done button clicked")
    var parent = item.parentElement;
    parent.classList.toggle('todo-done')
    var audioTag = document.createElement('audio')
    audioTag.src="taskdone.mp3"
    document.body.appendChild(audioTag)
    audioTag.play();
}
if(item.classList[0]=='delBtn')
{
    // console.log("Delete Button clicked")
    var parent = item.parentElement;
    parent.remove();
    var audioTag = document.createElement('audio')
    audioTag.src="taskcompleted.mp3"
    document.body.appendChild(audioTag)
    audioTag.play();
}
}