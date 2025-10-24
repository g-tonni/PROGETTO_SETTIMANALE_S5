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

/* const m = document.getElementsByTagName('g')
const listaRandom = []

setInterval(function () {
  listaRandom.splice(0, listaRandom.length - 1)
  for (let i = 0; i < m.length; i++) {
    const opacità = m[i].getAttribute('opacity')
    if (opacità === '0') {
      m[i].setAttribute('opacity', '1')
    }
  }
  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * m.length)
    listaRandom.push(random)
  }
  for (let i = 0; i < listaRandom.length; i++) {
    const nRandomLista = listaRandom[i]
    m[nRandomLista].setAttribute('opacity', 0)
  }
}, 200) */

const m = document.getElementsByTagName('g')
const listaRandom = []

setInterval(function () {
  listaRandom.splice(0, listaRandom.length - 1)
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * m.length)
    listaRandom.push(random)
  }
  for (let i = 0; i < listaRandom.length; i++) {
    const nRandomLista = listaRandom[i]
    const opacità = m[i].getAttribute('opacity')
    if (opacità === '0') {
      m[nRandomLista].setAttribute('opacity', 1)
    } else {
      m[nRandomLista].setAttribute('opacity', 0)
    }
  }
}, 100)
