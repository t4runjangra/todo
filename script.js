const addButton = document.getElementsByClassName("addButton")[0];
const inputFromUser = document.getElementsByClassName("userinput")[0];
const taskList = document.getElementsByClassName("tasklist")[0];
const align = document.getElementsByClassName("align")[0];
const deleteAll = document.getElementsByClassName("deleteAll")[0];

deleteAll.style.display = "none"
function toggleDeleteAllButton() {
  const task = document.querySelectorAll(".tasklist li")
  if (task.length>2) {
  deleteAll.style.display = "block"
  }
  else{
    deleteAll.style.display = "none"
  }
}
deleteAll.addEventListener("click", function () {
  const task = document.querySelectorAll(".tasklist li")
    
    if (task.length>0 && confirm("Delete ALL tasks permanently?")) {
      task.forEach(task => task.remove());
    toggleDeleteAllButton();
  }
})
  
inputFromUser.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});
const list = function deleteAll() {
  
}
addButton.addEventListener("click", () => {
  const taskText = inputFromUser.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("learnjs");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const p = document.createElement("p");
    p.textContent = taskText;
    const addCross = document.createElement("button");
    addCross.setAttribute("class", "cross");
    addCross.innerText = "❌";
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(addCross);
    li.appendChild(div);
    taskList.appendChild(li);


    checkbox.onclick = function () {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through"
        li.style.backgroundColor =" rgba(124, 133, 140, 0.47)"   
        li.style.opacity = "0.7"   
      }
      else if(!checkbox.checked){
        li.style.backgroundColor = "rgba(234, 228, 228, 0.808)"
        li.style.textDecoration = "none" 
        li.style.opacity = "1"   
      } }
    
    addCross.onclick = function () {
      li.remove();
      toggleDeleteAllButton();
    };

    inputFromUser.value = "";
    toggleDeleteAllButton();

  }
  else {
    alert("Enter a task");
  }
});

toggleDeleteAllButton();