let form = document.querySelector("form");
let input = document.querySelector("input");
let clearBtn = document.querySelector("#clear-btn");
let alertArea = document.querySelector("#alert-area");
let tasksEmptyDiv = document.querySelector(".tasks-empty");
let list = document.querySelector(".list");

// window.onload = input.focus();

tasksEmpty();
form.onsubmit = newTask;
clearBtn.onclick = clearTasks;

function newTask(e) {
  e.preventDefault(); // defult dawonload = no refrech
  if (input.value === "") {
    // return false oder aleart;
    alertArea.innerHTML =
      '<div class = "non-value">Pleas Insert Value   !</div>';
    setTimeout(() => {
      let nonValue = document.querySelector(".non-value");
      nonValue.style.height = 0;
      nonValue.style.padding = 0;

      // setTimeout(() => {
      //   nonValue.remove();
      // }, 1000);
    }, 1000);
  } else {
    // add Task
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");    //HTML DOM classList Property document.getElementById("myDIV").classList.add("mystyle");

    let inputCapital =
      input.value.substr(0, 1).toUpperCase() +
      input.value.substr(1, input.value.length); //erste letter groß.

    listItem.innerHTML = `<span class="task">${inputCapital}</span>
                          <span class="del"> X </span>`;

    list.appendChild(listItem);              // add serch word
    input.value = "";                       // delet the serch
    input.focus();                          // macht focus im serch butoon
    tasksEmpty();
    tasksCount(list.children.length);

    // tasksDone(list)

    // Delete Task
    let delBtns = document.querySelectorAll(".del");
    delBtns.forEach((btn) => {
      btn.onclick = deleteTask;
    });

    // done Task [li, li, li,.....]
    let allDone = document.querySelectorAll(".list-item");

    allDone.forEach((ele) => {
      ele.children[0].onclick = done; // [0] nur für task
    });
  }
}

function deleteTask(event) {
  event.target.parentNode.remove();
  tasksEmpty();
  tasksCount(list.children.length);
  tasksDone();
}

function clearTasks() {
  list.innerHTML = "";
  tasksEmpty();
  tasksCount(list.children.length);
  tasksDone();
}

function tasksEmpty() {
  if (list.children.length === 0) {
    tasksEmptyDiv.innerHTML = "Tasks Empty";
  } else {
    tasksEmptyDiv.innerHTML = "";
  }
}

function done(event) {
  event.target.classList.toggle("done"); // toggle und nicht add
  tasksDone();
}

function tasksCount(count) {
  document.querySelector(".c-tasks-count").innerHTML = count;
}
function tasksDone() {
  let doneLength = document.querySelectorAll(".done").length;
  document.querySelector(".c-tasks-done").innerHTML = doneLength;
}
