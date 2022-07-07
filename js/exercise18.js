export default function formValidation() {
  const $form = document.querySelector(".form")
  const $inputs = document.querySelectorAll(".form [required]")

  $inputs.forEach(input => {
    let $span = document.createElement("span")
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add("form-error", "none")

    input.insertAdjacentElement("afterend", $span)
  })

  document.addEventListener("keyup", e => {
    if (e.target.matches(".form [required]")) {
      let $input = e.target
      let pattern = $input.pattern || $input.dataset.pattern

      if (pattern && $input.value !== "") {
        let expreg = new RegExp(pattern)
        return (
          !expreg.exec($input.value) ? document.getElementById($input.name).classList.add("is-active") : document.getElementById($input.name).classList.remove("is-active")
        )
      }

      if (!pattern) {
        return (
          $input.value === "" ? document.getElementById($input.name).classList.add("is-active") : document.getElementById($input.name).classList.remove("is-active")
        )
      }

    }
  })

  document.addEventListener("submit", e => {
    e.preventDefault()

    const $loader = document.querySelector(".form__loader")
    const $response = document.querySelector(".form__response")

    $loader.classList.remove("none")

    setTimeout(() => {
      $loader.classList.add("none")
      $response.classList.remove("none")
      $form.reset()

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  })
}