export default function getGeolocation(id, mape) {

  const $geolocation = document.getElementById(id)

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
  }

  function onSuccess(position) {
    const {
      latitude,
      longitude,
      accuracy
    } = position.coords;

    $geolocation.insertAdjacentHTML("afterbegin", `<p>Tu posición es: </p><br>
    <ul>
    <li><span>Latitud:</span> ${latitude}</li>
    <li><span>Longitud:</span> ${longitude}</li>
    <li><span>Presión:</span> ${accuracy} metros</li>
    </ul>
    <br>
    <a href="https://www.google.com/maps/@${latitude},${longitude},18z"  target="_blank" rel="noopener">Ver Mapa</a>`)

  }

  function onError() {
    $geolocation.insertAdjacentHTML("afterbegin", "<p>Ocurrió un Error</p>")
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
}