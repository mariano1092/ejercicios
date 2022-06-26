export default function videoSpy() {
  let $videos = document.querySelectorAll(".video-spy")

  const callback = (entries) => {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause()
      window.addEventListener("visibilityChange", e => document.visibilityState === "visible" ? entry.target.play() : entry.target.pause())
    })
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.5
  })

  $videos.forEach(video => observer.observe(video))
}