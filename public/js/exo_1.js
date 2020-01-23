function exo1(){
  
    // EXO 1
    
    let titre1 = document.querySelectorAll('#exo1 h1')[0];
    let btn1 = document.querySelector('#btnExo1');
    
    btn1.addEventListener('click', () => {
        titre1.setAttribute("class", "bg-primary");
        titre1.innerText = "Titre modifié";
        titre1.style.color = "red";
        btn1.style.fontWeight = "bold"
    })  
    }
    
    export {exo1}