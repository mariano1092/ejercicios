const doc = document

export default function deviceDetection(deviceInfo) {
  const $p = doc.createElement("p")
  $p.textContent = `${navigator.userAgent}`
  doc.getElementById(deviceInfo).insertAdjacentElement("afterbegin", $p)
}
