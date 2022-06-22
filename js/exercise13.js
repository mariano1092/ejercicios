export default function searchPokemon(input) {

  document.addEventListener("keyup", e => {
    const pokemonCards = document.querySelectorAll(".card-pokemon")

    if (e.target.matches(input)) {

      const pokemon = document.querySelector(input).value.toLowerCase()

      pokemonCards.forEach(
        card => {
          const pokemonList = card.textContent.toLowerCase()
          pokemonList.includes(pokemon) ? card.classList.remove("filter") : card.classList.add("filter")
        })
    }
  })
}