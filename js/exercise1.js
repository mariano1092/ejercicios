export default function handleHamburger(menuBtn, navegation, section) {
  const doc = document

  doc.addEventListener('click', e => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      doc.querySelector(navegation).classList.toggle('active')
    }

    if (e.target.matches(section)) {
      doc.querySelector(navegation).classList.remove('active')
    }
  })
}
