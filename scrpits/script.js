const nav = document.getElementsByTagName('nav')[0]
/* console.log(nav) */
const bottone = document.getElementById('bottone-nav')
/* console.log(bottone) */

/* window.addEventListener('scroll', () => {
  const scrollY = window.scrollY // o window.pageYOffset
  console.log('Scroll Y:', scrollY)

  if (scrollY >= 374) {
    nav.style.backgroundColor = '#ffffff'
  } else {
    nav.style.backgroundColor = '#ffc017'
  }
}) */

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY // o window.pageYOffset
  console.log('Scroll Y:', scrollY)

  if (scrollY >= 378) {
    nav.classList.add('colore-nav')
    bottone.classList.add('colore-bottone')
  } else {
    nav.classList.remove('colore-nav')
    bottone.classList.remove('colore-bottone')
  }
})
