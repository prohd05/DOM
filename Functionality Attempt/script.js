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
    let value = changeP.innerHTML;
    let bi = "0";
    for(let a=1; a<value; a*2){
        bi = bi + "0";
    }
    console.log(bi);
});
console.log(document.title);

