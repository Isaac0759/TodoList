// Variable
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
let taskRemaining = 0;
let taskFinished = 0;
let taskTotal = 0;

// Event Listener for Add Button

addTask.addEventListener('click', function(){
// <div class="task"></div>
    let task = document.createElement('div');
    task.classList.add('task');
    // document
    //     .getElementById('compteur1')
    //     .innerText = (++taskRemaining) + ''; 


// document
//   .getElementById("parent")
//   .addEventListener("click", function() {
//   document
//     .getElementById("parent-count")
//     .innerText = (++parentClicks) + '';
// });



    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);


    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="bi bi-check2-all"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);



    // <button class="supprimerBouton></button>"
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        
        alert("S'il vous plait entré une tache.");
        // Si inputTask est vide pas de +1 
    }else{
        taskContainer.appendChild(task);
        document.getElementById('compteur1').innerText = (++taskRemaining) + ''; 
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = "line-through";    
    });

    deleteButton.addEventListener('click', function(e){

        let target = e.target;

        target.parentElement.parentElement.remove();
    });
});