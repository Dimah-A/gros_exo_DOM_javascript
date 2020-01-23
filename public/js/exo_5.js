
function exo5(){
    // EXO 5
    
    let btnExo5 = document.querySelectorAll('#exo5 button')[0];
    let addEgg = document.getElementById('oeuf'); // emplacement de l'oeuf
    
    btnExo5.addEventListener('click', () => {
        let img = document.createElement('img');
        img.setAttribute('src', 'img/oeuf2.jpg');
        img.setAttribute('width', '10%')
        addEgg.appendChild(img);
    })
    }
    export{exo5}