const doc = document

export function showClock(clock, btnInit, btnStop) {
  let clockTemporal
  doc.addEventListener('click', e => {
    if (e.target.matches(btnInit)) {
      clockTemporal = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString()
        doc.querySelector(clock).innerHTML = `<p> ${clockHour} </p>`
      }, 1000)

      e.target.disabled = true
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTemporal)
      doc.querySelector(clock).innerHTML = null
      doc.querySelector(btnInit).disabled = false
    }
  })
}
export function initAlarm(sound, initAlarm, stopAlarm) {
  let alarmTemporal
  const $alarm = doc.createElement('audio')
  $alarm.setAttribute('src', sound)

  doc.addEventListener('click', e => {
    if (e.target.matches(initAlarm)) {
      alarmTemporal = setTimeout(() => {
        $alarm.play()
      }, 1000)
      e.target.disabled = true
    }
    if (e.target.matches(stopAlarm)) {
      clearTimeout(alarmTemporal)
      $alarm.pause()
      $alarm.currentTime = 0
    }
  })
}
