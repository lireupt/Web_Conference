let frm = document.getElementById("frm")
frm.addEventListener("submit", function(event){
    let pass1 = document.getElementById("pass1")
    console.log(pass1)
    let pass2 = document.getElementById("pass2")
    console.log(pass2)

    if(pass1.value != pass2.value){
        alert("Passwords não coincidem!!")
        event.preventDefault()
    }
})