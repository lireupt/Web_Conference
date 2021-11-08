 //Pedido através do fetch

fetch('https://dog.ceo/api/breed/boxer/images/random') 
    .then(res=>res.json())                        
        .then(json=>document.getElementById("myImg").src = json.message)  


async function fecthByBreed(breed){
    try{
        const response = await fetch(`.../api/breed/${breed}/images/random`)
        const jsonData = await response.json()
        document.getElementById("myImg02").src = jsonData.message
    } catch(e){
        alert(e)
    }
}
fecthByBreed('boxer')