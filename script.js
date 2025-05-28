const addButton = document.getElementsByClassName("addButton")[0];
const inputFromUser = document.getElementsByClassName("userinput")[0];
const taskList = document.getElementsByClassName("tasklist")[0];
const align = document.getElementsByClassName("align")[0];
const deleteAll = document.getElementsByClassName("deleteAll")[0];
deleteAll.addEventListener("click", function () {
  const task = document.querySelectorAll(".tasklist li")
  if (task.length<=2) {
  task.style.color = "green"
  }
  if (task.length>=2) {
    // task.remove()
    task.forEach(task => task.remove());
    // task.style.display = "none"

  // if (confirm("Delete ALL tasks permanently?")) {
  //   // toggleDeleteAllButton();
  // }
}})
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
    console.log(addCross);
    taskList.appendChild(li);
    addCross.onclick = function () {
      li.remove();
    };
    inputFromUser.value = "";
  } else {
    alert("Enter a task");
  }
});
// deleteAll.addEventListener("click", () => {
//  const list = document.createElement("li");
//   if(list>=2){
//     deleteAll.style.display = "none"
//   }else{
//     taskList.remove();
//   }
// })
