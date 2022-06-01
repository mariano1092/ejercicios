const doc = document

export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {

  let breakpoint = window.matchMedia(mediaQuery)

  const responsive = (e) => {
    if (e.matches) {
      doc.getElementById(id).innerHTML = desktopContent
    } else doc.getElementById(id).innerHTML = mobileContent
  }

  breakpoint.addEventListener("change", responsive)
  responsive(breakpoint)
}
