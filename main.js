document.addEventListener("DOMContentLoaded", function(){
    const mainContainer = document.getElementById("main-container")
    // console.log("DOMContentLoaded")
  })

const button = document.getElementById("button");
button.addEventListener("click", getRandom) 

function getRandom(){
    if(document.getElementById("refran-li")){
        document.getElementById("refran-li").remove()

        let randomEl = refranes_array[Math.floor(Math.random() * refranes_array.length)]

        let refranLi = document.createElement("li")
        refranLi.id = "refran-li"
        refranLi.innerText = randomEl

        const refranesDiv = document.getElementById("refran")
        refranesDiv.append(refranLi)

    } else{

        let randomEl = refranes_array[Math.floor(Math.random() * refranes_array.length)]

        let refranLi = document.createElement("li")
        refranLi.id = "refran-li"
        refranLi.innerText = randomEl

        const refranesDiv = document.getElementById("refran")
        refranesDiv.append(refranLi)
    }
};

