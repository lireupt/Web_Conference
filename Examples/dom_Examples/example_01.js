alert("Olá Mundo!");

window.onload = function(){
    let result = document.getElementById("results")
    let button = document.getElementById("myButtons")
    button.onclick=function(){
        result.innerHTML = new Date();
    }
}

