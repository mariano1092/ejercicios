const doc = document;

export default function deviceDetection(deviceInfo) {
  
  doc.getElementById(deviceInfo).innerHTML = `<p>${navigator.userAgent}</p>`
}
