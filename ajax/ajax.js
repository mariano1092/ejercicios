(() => {
  const xhr = new XMLHttpRequest()
  const $xhrContent = document.getElementById("xhr")
  const $fragment = document.createDocumentFragment()

  xhr.addEventListener("readystatechange", e => {

    if (xhr.readyState !== 4) return
    if (xhr.status >= 200 && xhr.status < 300) {
      let responseTextJSON = JSON.parse(xhr.responseText)

      responseTextJSON.forEach(element => {
        const $li = document.createElement("li")
        $li.innerHTML = `Nombre: ${element.name} -- Email: ${element.email}`
        $fragment.appendChild($li)
      })

      $xhrContent.appendChild($fragment)
    } else {
      console.log(xhr.status)
    }

  })
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
  xhr.send()

})();

(() => {
  const $fetch = document.getElementById("fetch")
  const $fragment = document.createDocumentFragment()

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(responseJson => {
      responseJson.forEach(element => {
        const $li = document.createElement("li")
        $li.innerHTML = `Nombre: ${element.name} -- Email: ${element.email}`
        $fragment.appendChild($li)
        $fetch.appendChild($fragment)
      })
    }

    )
    .catch(err => {
      let $message = document.createElement("p")
      $message.textContent = `Error ${err.status}. Ocurrió un error`

      $fetch.appendChild($message)
    })
    .finally(() => {
      console.log("Se ejecuta de todas maneras.")
    })
})();

(() => {
  const $fetchAA = document.getElementById("fetch-aa")
  const $fragment = document.createDocumentFragment()

  async function getData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let responseJson = await response.json()

      if (!response.ok) throw { status: response.status, statusText: response.statusText }

      responseJson.forEach(element => {
        const $li = document.createElement("li")
        $li.innerHTML = `Nombre: ${element.name} -- Email: ${element.email}`
        $fragment.appendChild($li)
      })

      $fetchAA.appendChild($fragment)
    } catch (error) {
      let $message = document.createElement("p")
      $message.textContent = `Error ${error.status}. Ocurrió un error`

      $fetchAA.appendChild($message)
    } finally {
      console.log("Se ejecuta de todas formas 2")
    }
  }

  getData()
})();