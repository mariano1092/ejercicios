const doc = document

export default function responsiveTester(webpage, width, height, submit, submitContainer) {

  doc.addEventListener("click", e => {
    if (e.target.matches(submit)) {
      e.preventDefault()
      let webpageContent = doc.getElementById(webpage).value
      let widthContent = doc.getElementById(width).value
      let heightContent = doc.getElementById(height).value

      let windowOpen = window.open(webpageContent, "_blank", ` toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=no,
      height=${heightContent},
      width=${widthContent}`)
    }

    if (e.target.matches("#close-btn")) {
      window.close(windowOpen)
    }
  })
} 