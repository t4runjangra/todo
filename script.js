const addButton = document.getElementsByClassName("addButton")[0];
const inputFromUser = document.getElementsByClassName("userinput")[0];
const taskList = document.getElementsByClassName("tasklist")[0];

addButton.addEventListener("click", () => {
  const taskText = inputFromUser.value.trim();

  if (taskText !== "") {
    // Create <li>
    const li = document.createElement("li");

    // Create <div class="learnjs">
    const div = document.createElement("div");
    div.classList.add("learnjs");

    // Create checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create <p> for task text
    const p = document.createElement("p");
    p.textContent = taskText;

    // Append input and p to div
    div.appendChild(checkbox);
    div.appendChild(p);

    // Append div to li
    li.appendChild(div);


    taskList.appendChild(li);
    
    inputFromUser.value = "";
  } else {
    alert("Enter a task");
  }
});
