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
        clearInput(taskInput);
      }
    });

    const createTaskElement = (taskText) =>{
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = taskText;

      const cancelButton = createCancelButton(p);
      
      li.addEventListener("click", () => {
        p.classList.toggle("line-through");
        li.classList.toggle("checked");
      });


      li.appendChild(p);
      li.appendChild(cancelButton);

      return li;
    }

    const createCancelButton = (p) => {
        const cancelButton = document.createElement("button");
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click',() => {
            p.style.textDecoration = "line-through";
      });
      return cancelButton;
    }

    const clearInput = (input) => {
        input.value = "";
    }

    const sendEmailButton = document.querySelector("#send-email-button");
    sendEmailButton.addEventListener("click", function () {
        const email = window.prompt("Enter your email address:");
        if (email) {
            const subject = "To-Do List";
            const body = taskList.innerHTML;
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink);
        } else {
            alert("Invalid email address. Please try again.");
        }
    });
});



