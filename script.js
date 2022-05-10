/* ================= NAV SCROLL BAR ===================== */

const nav = document.querySelector('body nav')

function navbarScroll() {
  if (scrollY === 0) {
    nav.classList.remove('navbar-scroll')
  } else {
    nav.classList.add('navbar-scroll')
  }
}

document.addEventListener('scroll', navbarScroll)

/* ========== CLICK NAV BAR =========== */

const navOpen = document.querySelector('.open-menu')
const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')

function clickOpenMenu() {
  body.classList.add('menu-expanded')
  menu.classList.remove('display-none')
  closeMenu.classList.remove('display-none')
}

function clickCloseMenu() {
  body.classList.remove('menu-expanded')
  menu.classList.add('display-none')
  closeMenu.classList.add('display-none')
}

navOpen.addEventListener('click', clickOpenMenu)
closeMenu.addEventListener('click', clickCloseMenu)

/* ========== BUTTON CLICK TO TOP =========== */
const clickToTop = document.querySelector('#backToTopButton')

function clickTopTop() {
  if (scrollY >= 496) {
    clickToTop.classList.add('show')
  } else {
    clickToTop.classList.remove('show')
  }
}

document.addEventListener('scroll', clickTopTop)

/* ========== ACTIVE =========== */
const navbarA1 = document.querySelector('nav .nav-bar li .a1')
const navbarA2 = document.querySelector('nav .nav-bar li .a2')
const navbarA3 = document.querySelector('nav .nav-bar li .a3')
const A4 = document.querySelector('nav .menu .a4')

const targetLine = scrollY + innerHeight / 2

// verificar se a seção passou da linha
const sectionTop = home.offsetTop

const sectionHeight = home.offsetHeight

const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

function activateMenuAtCurrentSection() {
  if (scrollY >= 0 && scrollY < 835) {
    navbarA1.classList.add('active')
  } else {
    navbarA1.classList.remove('active')
  }
  if (scrollY >= 835 && scrollY < 1845) {
    navbarA2.classList.add('active')
  } else {
    navbarA2.classList.remove('active')
  }
  if (scrollY >= 1845 && scrollY < 2405) {
    navbarA3.classList.add('active')
  } else {
    navbarA3.classList.remove('active')
  }
  if (scrollY >= 2405) {
    A4.classList.add('active')
  } else {
    A4.classList.remove('active')
  }
}

document.addEventListener('scroll', activateMenuAtCurrentSection)

/* ========== ScrollReveal =============== */

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
about content`)
