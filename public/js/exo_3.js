// EXO 3
function exo3(){
    let inconnu = document.querySelectorAll("#exo3 h2 span")[0];
    let input3 = document.querySelectorAll('#exo3 input')[0];
    let btnExo3 = document.querySelectorAll('#exo3 button')[0];
    
    btnExo3.addEventListener('click', () => {
        inconnu.innerText = input3.value
        input3.value = ""
    });
    
    input3.addEventListener('keypress', () => {
        if (event.key == "Enter") {
            inconnu.innerText = input3.value
            input3.value = ""
        }
    });
    }
    export {exo3}