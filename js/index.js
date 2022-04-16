import handleHamburger from './dom-exercise-one.js'

const doc = document

doc.addEventListener('DOMContentLoaded', e => {
  handleHamburger('.burger-menu', '.aside', '.navbar a')
})
