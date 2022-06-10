<<<<<<< HEAD
const doc = document

export default function deviceDetection(deviceInfo) {
=======
const doc = document;

export default function deviceDetection(deviceInfo) {
  
>>>>>>> 834941c92b3f4af32a1ca55425b4c76c2ca3b775
  doc.getElementById(deviceInfo).innerHTML = `<p>${navigator.userAgent}</p>`
}
