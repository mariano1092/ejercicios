const doc = document;

export default function redDetection(container) {

  const $connected = doc.createElement("p")
  $connected.textContent = "Estás Conectado"
  doc.getElementById(container).insertAdjacentElement("afterbegin", $connected)

  const isOnline = () => {
    const $div = doc.createElement("div")

    if (navigator.onLine) {
      $div.textContent = "Conexión Establecida"
      $div.classList.add("online")
      $div.classList.remove("offline")

      $connected.textContent = "Estás Conectado"
      doc.getElementById(container).insertAdjacentElement("afterbegin", $connected)

    }
    else {
      $div.textContent = "Conexión Perdida"
      $div.classList.add("offline")
      $div.classList.remove("online")

      $connected.textContent = "Estás desconectado"
      doc.getElementById(container).insertAdjacentElement("afterbegin", $connected)

    }



    doc.body.insertAdjacentElement("afterbegin", $div)
    setTimeout(() => {
      doc.body.removeChild($div)
    }, 2000);
  }

  window.addEventListener("online", (e) => isOnline())
  window.addEventListener("offline", (e) => isOnline())
}