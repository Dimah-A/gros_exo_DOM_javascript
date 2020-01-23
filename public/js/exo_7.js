function exo7() {
    // EXO 7

    let inputToDo = document.getElementById('activite');
    let myList = document.getElementById('list');
    let btnTodo = document.getElementsByClassName('btn-do');

    let tabX = [];
    let tabList = [];
    let tabP = [];

    inputToDo.addEventListener('keypress', () => {
        if (event.key == "Enter" && inputToDo.value != "") {
            // div qui va contenir chaque éléments
            let div = document.createElement('div');
            div.classList.add('div2');

            // hr deco
            let hr = document.createElement('hr');

            // checkbox
            let check = document.createElement('input');
            check.setAttribute("type", "checkbox");

            // contenu value input
            let p = document.createElement('p');
            p.innerText = inputToDo.value
            let span = document.createElement('span');

            //supprimer (croix)
            let x = document.createTextNode('\u2716');

            // ranger mes éléments
            myList.appendChild(div)

            div.appendChild(check)
            div.appendChild(p)

            span.appendChild(x)

            div.appendChild(span)
            div.appendChild(hr)

            tabX.push(span)
            tabList.push(div)
            tabP.push(p)

            // vider l'input après l'avoir entré
            inputToDo.value = "";


            // SUPPRIMER

        }
        for (let i = 0; i < tabX.length; i++) {
            tabX[i].onclick = function () {
                let divX = this.parentElement;
                divX.remove()
            }
        }

        // RENOMMER

        tabP.forEach(p => {
            p.onclick = () => {
                let input = document.createElement('input')
                input.setAttribute('type', 'text');
                input.value = p.innerText
                input.style.fontStyle = "italic"
                p.parentElement.replaceChild(input, p);

                input.addEventListener('keypress', () => {
                    if (event.key == "Enter") {
                        let p2 = document.createElement('p');
                        p2.innerText = input.value
                        input.parentElement.replaceChild(p2, input);
                    }
                })
            }
        });
    });


    // VALIDER UNE TÂCHE (BG GREEN)

    myList.addEventListener('click', () => {
        tabList.forEach(e => {
            if (e.children[0].checked) {
                e.style.backgroundColor = "green"
            } else {
                e.style.backgroundColor = ""
            }
        });
    })

    // SWITCHER ENTRE LES BUTTONS (TOUTES COMPLETEES A FAIRE)

    btnTodo[0].addEventListener('click', () => {
        tabList.forEach(e => {
            e.style.display = "flex"
        });
    })

    btnTodo[1].addEventListener('click', () => {
        tabList.forEach(e => {
            if (e.children[0].checked) {
                e.style.display = "flex"
            } else {
                e.style.display = "none"
            }
        });
    })

    btnTodo[2].addEventListener('click', () => {
        tabList.forEach(e => {
            if (e.children[0].checked) {
                e.style.display = "none"
            } else {
                e.style.display = "flex"
            }
        });
    })

}

export { exo7 }