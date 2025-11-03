document.getElementById("changeP").innerHTML="1";
document.getElementById("addButton").innerHTML="add value";

// I am selecting the button and adding an event listener for a mouse click that will
// run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});


document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    let result;
    let arr=[];
    for(let a=1;a<=10;a++){
        result=origin*a;
        document.getElementById("td" + a).innerHTML = result;
    }
});

let array = [];
let origin=document.getElementById("changeP").innerHTML;
for(let x = 0; x <= 10; x++){
    let num = origin * x;
    array.push(num);
}

console.log(array);
//if you want to retrive the array I will start at index 0 and go uptil index 9. 
// Challange is how to put it in the tagName 

let num = arrray.map(function ab);
console.log(num);   
function ab(num){
    return num*1;
}

//getElementByTagName will return an array of elements
for (let index=0; index < array.length; index++){
    docuement.getElementByTagName("td")[index].innerHTML=array[index];
}

// In conlusion: I would need one for the array and one for the td tags
// therefore this approach will not be most suitable one.
// another thing we can do is, use array.map to figure out a way
textCo