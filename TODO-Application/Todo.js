
document.querySelector("form").addEventListener("submit", myTodoFunction);


function myTodoFunction()
{
    event.preventDefault();
    console.log("Inside Todo Function");
    
    var taskAdded=document.querySelector("#task").value;
    var taskPriority=document.querySelector("#priority").value;
    var taskStatus=document.querySelector("#status").value;
    

    var todo={};
    todo.name=taskAdded;
    todo.priority=taskPriority;
    todo.status=taskStatus;

    var taskList = JSON.parse(localStorage.getItem("todo-tasks")||"[]");
    console.log("taskList :"+taskList);
    taskList.push(todo);
    localStorage.setItem("todo-tasks",JSON.stringify(taskList));
  
    displayTasks();

   document.querySelector("#task").value = "";
   document.querySelector("#priority").value = "";
   document.querySelector("#status").value = "";
}

function displayTasks()
{
    console.log("inside display fuction");
   

    var storedList = JSON.parse(localStorage.getItem("todo-tasks")||"[]");
    document.querySelector("#bottom-section").innerHTML = "";

    // console.log(storedList);

    storedList.forEach(function(elements) {
        var box1=document.createElement("div");   
       // box1.setAttribute("id","task-section")
         box1.innerText=elements.name;
    
         var box2=document.createElement("div");
         //box2.setAttribute("id","task-priority")
        box2.innerText=elements.priority;

   
        var box3=document.createElement("div");
       // box3.setAttribute("id","task-status");
       box3.innerText=elements.status;
       document.querySelector("#bottom-section").append(box1,box2,box3);
    
    });


}
//window.addEventListener("DOMContentLoaded", displayTasks);
displayTasks();