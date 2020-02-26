document.addEventListener("DOMContentLoaded", function(){
    const mainContainer = document.getElementById("main-container")
    // console.log("DOMContentLoaded")
  })

const button = document.getElementById("random-btn");
button.addEventListener("click", getRandom) 

function getRandom(){
    if(document.getElementById("refran-li")){
        document.getElementById("refran-li").remove()
        if(document.getElementById("eng-li")){
            document.getElementById("eng-li").remove()
        }

        let randomEl = refranes_array[Math.floor(Math.random() * refranes_array.length)]

        let refranLi = document.createElement("li")
        refranLi.id = "refran-li"
        refranLi.innerText = randomEl

        const refranesDiv = document.getElementById("refran")
        refranesDiv.append(refranLi)

        const translateBtn = document.createElement("button")
        translateBtn.id = "translate-btn"
        // translateBtn.innerText = "Translate"
        refranLi.append(translateBtn)
        translateBtn.addEventListener('click', changeLang)

    } else{

        let randomEl = refranes_array[Math.floor(Math.random() * refranes_array.length)]

        let refranLi = document.createElement("li")
        refranLi.id = "refran-li"
        refranLi.innerText = randomEl

        const refranesDiv = document.getElementById("refran")
        refranesDiv.append(refranLi)

        const translateBtn = document.createElement("button")
        translateBtn.id = "translate-btn"
        // translateBtn.innerText = "Translate"
        refranLi.append(translateBtn)
        translateBtn.addEventListener('click', changeLang)
    }
};


function changeLang(){
    let randomRefran = document.querySelector("li").innerText
  
//     /* found at https://jsfiddle.net/alexriz/AEnyZ/  */
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate"

    var xhr = new XMLHttpRequest(),
    textAPI = randomRefran
    langAPI = 'en'
    data = "key="+API_KEY+"&text="+textAPI+"&lang="+langAPI;
        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function() {
            if (this.readyState==4 && this.status==200) {
                var res = this.responseText;
                var json = JSON.parse(res);
  
                const refranLi = document.getElementById("refran-li")
                let engLi = document.createElement("li")
                engLi.id = "eng-li"
                engLi.innerHTML = json.text[0]
                refranLi.append(engLi)

                document.getElementById("translate-btn").remove()
    }    
  }  
};
