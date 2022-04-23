import handleHamburger from './dom-exercise-one.js'
import { showClock, initAlarm } from './dom-exercise-two.js'
import { moveBall } from './dom-exercise-three.js'
import { countdown } from './dom-exercise-four.js'
import { moveScroll } from './dom-exercise-five.js'
const doc = document

doc.addEventListener('DOMContentLoaded', e => {
  handleHamburger('.burger-menu', '.aside', '.navbar a')
  showClock('.clock-content', '.init-clock', '.stop-clock')
  initAlarm('assets/alarm.mp3', '.init-alarm', '.stop-alarm')
  countdown('.countdown-container', 'Sep 10, 2022 10:23:43')
})

doc.addEventListener('keydown', e => {
  moveBall(e, '.game-stage', '.game-ball')
})
