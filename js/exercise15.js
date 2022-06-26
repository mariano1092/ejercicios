export default function carrousel(btnRight, btnLeft) {

  const sliders = document.querySelectorAll(".carrousel__slide")
  let i = 0;

  document.addEventListener("click", e => {
    if (e.target.matches(btnLeft)) {
      e.preventDefault()
      sliders[i].classList.remove("active")
      i--
      if (i < 0) i = sliders.length - 1
      sliders[i].classList.add("active")
    }

    if (e.target.matches(btnRight)) {
      e.preventDefault()
      sliders[i].classList.remove("active")
      i++
      if (i >= sliders.length) { i = 0 }
      sliders[i].classList.add("active")
    }
  })




}