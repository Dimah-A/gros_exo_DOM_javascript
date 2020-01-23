import {exo1} from '../js/exo_1.js';
import {exo3} from '../js/exo_3.js';
import {exo4} from '../js/exo_4.js';
import {exo5} from '../js/exo_5.js';
import {exo6} from '../js/exo_6.js';
import {exo7} from '../js/exo_7.js';

// EXO 2 = EVENT NAV


// VARIABLE NAVI & SECTION

let nav1 = document.getElementById('exos').children[0];
let section1 = document.getElementById('exo1');

let nav2 = document.getElementById('exos').children[1];
let section2 = document.getElementById('exo2');

let nav3 = document.getElementById('exos').children[2];
let section3 = document.getElementById('exo3');

let nav4 = document.getElementById('exos').children[3];
let section4 = document.getElementById('exo4');

let nav5 = document.getElementById('exos').children[4];
let section5 = document.getElementById('exo5');

let nav6 = document.getElementById('exos').children[5];
let section6 = document.getElementById('exo6');

let nav7 = document.getElementById('exos').children[6];
let section7 = document.getElementById('exo7');


// EVENT NAVIGATION

exo1()
nav1.addEventListener('click', () => {
    section1.classList.remove("none")
    section2.setAttribute("class", "none")
    section3.setAttribute("class", "none")
    section4.setAttribute("class", "none")
    section5.setAttribute("class", "none")
    section6.setAttribute("class", "none")
    section7.setAttribute("class", "none")
})


nav2.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.classList.remove("none")
    section3.setAttribute("class", "none")
    section4.setAttribute("class", "none")
    section5.setAttribute("class", "none")
    section6.setAttribute("class", "none")
    section7.setAttribute("class", "none")
})

exo3()
nav3.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.setAttribute("class", "none")
    section3.classList.remove("none")
    section4.setAttribute("class", "none")
    section5.setAttribute("class", "none")
    section6.setAttribute("class", "none")
    section7.setAttribute("class", "none")
})

exo4()
nav4.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.setAttribute("class", "none")
    section3.setAttribute("class", "none")
    section4.classList.remove("none")
    section5.setAttribute("class", "none")
    section6.setAttribute("class", "none")
    section7.setAttribute("class", "none")
})

exo5()
nav5.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.setAttribute("class", "none")
    section3.setAttribute("class", "none")
    section4.setAttribute("class", "none")
    section5.classList.remove("none")
    section6.setAttribute("class", "none")
    section7.setAttribute("class", "none")
})


exo6()
nav6.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.setAttribute("class", "none")
    section3.setAttribute("class", "none")
    section4.setAttribute("class", "none")
    section5.setAttribute("class", "none")
    section6.classList.remove("none")
    section7.setAttribute("class", "none")

})

exo7()
nav7.addEventListener('click', () => {
    section1.setAttribute("class", "none")
    section2.setAttribute("class", "none")
    section3.setAttribute("class", "none")
    section4.setAttribute("class", "none")
    section5.setAttribute("class", "none")
    section6.setAttribute("class", "none")
    section7.classList.remove("none")

})