
// loading
window.addEventListener('load', ()=>{
    const contenedor_loader = document.querySelector('.contedor__loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})
// CARRUSEL
const btnLeft = document.querySelector('.btn-left'),
    btnRight = document.querySelector('.btn-right'),
    slider = document.querySelector('#slider'),
    sliderSection = document.querySelectorAll('.slider-section');

// console.log(sliderSection)
btnLeft.addEventListener('click', e => moveToLeft())
btnRight.addEventListener('click', e => moveToRight())
setInterval(() => {
    moveToRight()
}, 3000);
let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;
function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'none'

        return;
    }
    counter++;
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .8s'

}
function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = 'none'
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .8s'


}

function calcularPromedio() {
    var balance = parseFloat(document.getElementById("balance").value);
    var apalancamiento = parseInt(document.getElementById("apalancamiento").value);
    var valor_fecha1 = parseFloat(document.getElementById("valor-fecha1").value);

    // Cálculo del promedio de acciones
    var promedio_acciones = Math.floor(balance * apalancamiento / valor_fecha1);

    // Actualizar el campo de acciones
    document.getElementById("acciones").value = promedio_acciones;
  }

  function calcularGanancia() {
    var valor_fecha1 = parseFloat(document.getElementById("valor-fecha1").value);
    var valor_fecha2 = parseFloat(document.getElementById("valor-fecha2").value);
    var unidades = parseInt(document.getElementById("unidades").value);
    
    // Cálculo de la ganancia potencial
    var movimiento = (valor_fecha2 - valor_fecha1) * unidades;
    var ganancia = movimiento > 0 ? movimiento : 0;

    // Mostrar resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Ganancia potencial: $" + ganancia.toFixed(2);
    resultadoDiv.classList.add('resultado')
  }
/*============== SH=OW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*============== MENU SHOW ===============*/
// Validacion si la constante existe
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*============== MENU HIDDEN ===============*/
// Validacion si la constante existe
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 3000,
    delay: 200,
    //reset:true //repetir animacion

})
sr.reveal(`.home, .calculadora, .registro`)




