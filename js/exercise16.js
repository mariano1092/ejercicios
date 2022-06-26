export default function sectionObserver() {

  const $sections = document.querySelectorAll(".section[data-scroll-spy]")

  const callback = (entries) => {

    entries.forEach(entry => {
      const id = entry.target.getAttribute("id")
      entry.isIntersecting ?
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("activeSpy") :
        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("activeSpy")

    })
  }
  const observer = new IntersectionObserver(callback, {
    threshold: [0.5, 0.75]
  })

  $sections.forEach(section => observer.observe(section))
}