console.log(window);
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector("#task-input");
    const addTaskButton = document.querySelector("#add-task-button");
    const taskList = document.querySelector("#task-list");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });

    function createTaskElement(taskText) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = taskText;

      const cancelButton = document.createElement("button");
      cancelButton.textContent = 'Cancel';
      cancelButton.addEventListener('click', function() {
        p.style.textDecoration = "line-through";
      });

      li.addEventListener("click", function () {
        p.classList.toggle("line-through");
        li.classList.toggle("checked");
      });


      li.appendChild(p);
      li.appendChild(cancelButton);

      return li;
    }
});

