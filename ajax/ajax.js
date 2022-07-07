(() => {
  const xhr = new XMLHttpRequest()
  const $xhrContent = document.getElementById("xhr")
  const $fragment = document.createDocumentFragment()

  xhr.addEventListener("readystatechange", e => {

    if (xhr.readyState !== 4) return
    if (xhr.status >= 200 && xhr.status < 300) {
      let responseTextJSON = JSON.parse(xhr.responseText)
      console.log(responseTextJSON)

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

})()