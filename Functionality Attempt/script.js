document.getElementById("addButton").addEventListener("click", function() {
    let origin = document.getElementById("changeP").innerHTML;
    console.log(origin);
    origin = parseInt(origin) + 1;
    document.getElementById("changeP").innerHTML = origin;
});

document.getElementById("view").addEventListener("click", function(){
    for(let a=1; a<11; a++){
        let value = a*changeP.innerHTML;
        console.log(value);
        document.getElementById(a).innerHTML = value;
    }
});

document.getElementById("binary").addEventListener("click", function(){
    let value = document.getElementById("changeP").innerHTML;
    let bi = "";
    let r = ""
    while (value > 0){
        r = value % 2;        
        bi = r + bi;     
        value = parseInt(value / 2); 
        }
    console.log(bi);
    document.getElementById("biVal").innerHTML = bi;
});

document.getElementById("clear").addEventListener("click", function(){
        document.getElementById("changeP").innerHTML = 0;
        document.getElementById("biVal").innerHTML = "--";
        
        for(let a=1; a<11; a++){
        document.getElementById(a).innerHTML = "--";
    }
});
console.log(document.title);