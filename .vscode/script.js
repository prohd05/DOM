document.getElementById("taskname1").innerText = "Complete the project documentation";
// what is the difference between Document and document in DOM?


// I declared a variable and added something to print to console
let task =  document.getElementById("taskname2").innerHTML;
console.log(task + " is selected");

//I added functionality to the remove button to cross out the task and change its color to lightgrey
document.getElementById("compl1").addEventListener("click", function() {
    document.getElementById("taskname2").style.textDecoration = "line-through";
    document.getElementById("taskname1").style.color ="lightgray";
});

document.getElementById("addTask").addEventListener("click", function() {
    event.preventDefault();
    document.getElementById("taskname3").textContent = document.getElementById("new-task").value;
});

/*
document.getElementById("addTask").addEventListener("click", function () {
    event.preventDefault(); 
    let newTask = document.getElementById("new-task").value; // Fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});
*/

console.log(document.title);