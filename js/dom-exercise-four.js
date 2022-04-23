const doc = document

export function countdown(countdown, date) {
  const countdownDate = new Date(date).getTime()

  let countdownTemporal = setInterval(() => {
    const now = new Date().getTime()
    let limitTime = countdownDate - now

    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
    let hours = (
      '0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2)
    let minutes = (
      '0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2)
    let seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2)

    doc.querySelector(
      countdown
    ).innerHTML = `<p>Faltan <span class="time">${days}</span> días <span class="time">${hours}</span> horas <span class="time">${minutes}</span> minutos y <span class="time">${seconds}</span> segundos</p>`

    if (limitTime < 0) clearInterval(countdownTemporal)
  }, 1000)
}
