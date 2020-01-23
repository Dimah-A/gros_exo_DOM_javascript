
function exo4(){
    // EXO 4
    
    let btnChange4 = document.querySelectorAll('#exo4 button')[0];
    let btnNb4 = document.querySelectorAll('#exo4 button')[1];
    let carreG = document.querySelectorAll('#rouge')[0];
    let carreD = document.querySelectorAll('#rouge')[1];
    let i = 0;
    
    // Change de place
    
    btnChange4.addEventListener('click', () => {
        i++
        carreD.classList.toggle('none');
        carreG.classList.toggle('none');
    
        btnNb4.innerText = "Nombre de click : " + i
    
    });
    
    // Mettre le compteur à zéro
    
    btnNb4.addEventListener('click', () => {
        btnNb4.innerText = "Nombre de click"
        i = 0
    })
    }
    export{exo4}
    