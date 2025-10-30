document.getElementById("changeP").innerHTML = "1";
document.getElementById("addButton").innerHTML="add Value"

// I am selecting these buttons and adding an event listener for the mouse click that willl run a function
document.getElementById("addButton").addEventListener("click", function() {
    let origin = document.getElementById("changeP").innerHTML;
    console.log(origin);
    origin = parseInt(origin) + 1;
    document.getElementById("changeP").innerHTML = origin;
});

document.getElementById("multiButton").addEventListener("click", function() {
    let origin = document.getElementById("changeP").innerHTML;
    let arr=[];
    for (let a = 0; a<5; a++){
        arr.push(parseInt(origin) * (a+1));
    }
    console.log(arr);
});

document.getElementsByClassName("card")[0].style.backgroundColor = "lightblue";
// The card has a counter, is a functional compontent, has functionality.