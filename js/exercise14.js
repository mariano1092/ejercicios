export default function toRaffle(btn) {

  document.addEventListener("click", e => {

    if (e.target.matches(btn)) {

      const $participants = document.querySelectorAll(".contestant")
      const lottery = Math.floor(Math.random() * $participants.length)

      setTimeout(() => {
        $participants.forEach(participant => participant.classList.remove("winner"))
      }, 2000);

      $participants[lottery].classList.add("winner")

      // for (let i = 0; i < $participants.length; i++) {
      //   if (i === lottery) {
      //     $participants[i].classList.add("winner")
      //     break
      //   }
      // }
    }
  })
}