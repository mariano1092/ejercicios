const doc = document

export default function responsiveTester(webpage, width, height, form) {
  doc.addEventListener('submit', e => {
    e.preventDefault()
    let webpageContent = doc.getElementById(webpage).value
    let widthContent = doc.getElementById(width).value
    let heightContent = doc.getElementById(height).value
    let cerrar = doc.getElementById(form).cerrar

    let windowOpen = window.open(
      webpageContent,
      '_blank',
      ` toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=no,
      height=${heightContent},
      width=${widthContent}`
    )

    doc.addEventListener('click', e => {
      if (e.target === cerrar) {
        windowOpen.close()
      }
    })
  })
}
