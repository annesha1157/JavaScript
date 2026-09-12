const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
console.log(taskInput);
console.log(addBtn);
console.log(taskList);
addBtn.addEventListener("click",function(){
    const li = document.createElement("li");
li.textContent = taskInput.value;
li.addEventListener("click",function(){
    li.classList.toggle("completed");
});
const deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
li.addEventListener("click" , function(){
    li.remove();
});
taskList.appendChild(li);
taskList.appendChild(li);

});
