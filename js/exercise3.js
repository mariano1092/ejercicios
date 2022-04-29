const doc = document
let x = 0
let y = 0

export function moveBall(e, stage, ball) {
  const $ball = doc.querySelector('.game-ball')
  const $stage = doc.querySelector('.game-stage')
  let limitsBall = $ball.getBoundingClientRect()
  let limitsStage = $stage.getBoundingClientRect()

  switch (e.keyCode) {
    case 37:
      //left
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault()
        x--
      }

      break
    case 38:
      //up
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault()
        y--
      }

      break
    case 39:
      //right
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault()
        x++
      }

      break
    case 40:
      //down
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault()
        y++
      }

      break
    default:
      break
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}
