function exo6() {
    // EXO 6

    // première calculatrice

    let rep1 = document.querySelector('#rep1');
    let rep2 = document.querySelector('#rep2');
    let egal0 = document.querySelector('#egal0');
    let final = document.querySelector('#response0');

    egal0.addEventListener('click', () => {
        final.innerText = Number(rep1.value) + Number(rep2.value)
        egal0.style.backgroundColor = "green"
        egal0.style.color = "white"
    })



    // DEUXIEME CALCULATRICE
    // mes variables

    // Affichage du calcul
    let affichage = document.getElementById('calcul')
    // variable qui contiennent mes valeurs
    let num1 = '';
    let num2 = '';

    // btn egal
    let btnEgal = document.getElementById('egal');

    // resultat final/calcul final
    let result = document.getElementById('result');

    // remettre à zéro
    let zero = document.getElementById('reset');

    // Tab Numero
    let tabNum = document.querySelectorAll('.number');

    // mes signes
    let plus = document.getElementsByClassName('sign')[0];
    let moins = document.getElementsByClassName('sign')[1];
    let fois = document.getElementsByClassName('sign')[2];
    let divise = document.getElementsByClassName('sign')[3];
    let sign = "";
    // compteur à zéro
    let cpt = 0;
    // Ajouter le chiffre introduit au premier input

    // mes numéros vont dans des variables


    tabNum.forEach(chiffre => {
        chiffre.addEventListener('click', () => {
            if (cpt % 2 == 0) {
                num1 += chiffre.innerText
                affichage.value += chiffre.innerText;
            } else {
                num2 += chiffre.innerText
                affichage.value += chiffre.innerText;
            }

        })
    })

    // actions opérateurs

    // plus
    plus.addEventListener('click', () => {
        affichage.value += "+"
        sign = "plus"
        cpt++;

    })

    // moins
    moins.addEventListener('click', () => {
        affichage.value += "-"
        sign = "moins"
        cpt++;
    })

    // fois
    fois.addEventListener('click', () => {
        affichage.value += "*"
        sign = "fois"
        cpt++;
    })

    // diviser
    divise.addEventListener('click', () => {
        affichage.value += "/"
        sign = "diviser"
        cpt++;
    })


    btnEgal.addEventListener('click', () => {
        switch (sign) {
            case "plus":
                result.innerText = affichage.value
                result.innerText += " = "
                result.innerText += Number(num1) + Number(num2);
                break;
            case "moins":
                result.innerText = affichage.value
                result.innerText += " = "
                result.innerText += Number(num1) - Number(num2);
                break;
            case "fois":
                result.innerText = affichage.value
                result.innerText += " = "
                result.innerText += Number(num1) * Number(num2);
                break;
            case "diviser":
                result.innerText = affichage.value
                result.innerText += " = "
                result.innerText += Number(num1) / Number(num2);
                break;
            default: alert('Bien essayé')
        }
        cpt = 0;
        num1 = "";
        num2 = "";
        affichage.value = "";
    })


    zero.addEventListener('click', () => {
        num1 = "";
        num2 = "";
        affichage.value = "";
        result.innerText = "0";
        cpt = 0;
    })
}
export { exo6 }