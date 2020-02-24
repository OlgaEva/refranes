document.addEventListener("DOMContentLoaded", function(){
    const mainContainer = document.getElementById("main-container")
    console.log("DOMContentLoaded")
  })


const button = document.getElementById("button");
button.addEventListener("click", getRandom) 

function getRandom(){

    let randomEl = REFRANES_ARRAY[Math.floor(Math.random() * REFRANES_ARRAY.length)]

    let refranLi = document.createElement("li")
    refranLi.innerText = randomEl

    const refranesDiv = document.getElementById("refran")
    refranesDiv.append(refranLi)

};

