//THEME COLOR

const d = document;

export default function toggleTheme(themeButton, dataTheme){
  
  const $themeButton = d.querySelector(".theme-button")  
  const $selectors = d.querySelectorAll("[data-theme]")

    d.addEventListener("click", e => {
      if(e.target.matches(themeButton) || e.target.matches(`${themeButton} *`)){

        if($themeButton.classList.contains("fa-moon")){
          $themeButton.classList.remove("fa-moon")
          $themeButton.style.transform = "translateX(20px)"
          $themeButton.classList.add("fa-sun")
          $selectors.forEach(element => element.classList.add(dataTheme))


        } else{
          
          $themeButton.classList.remove("fa-sun")
          $themeButton.classList.add("fa-moon")
          $themeButton.style.transform = "translateX(0px)"
          $selectors.forEach(element => element.classList.remove(dataTheme))

          
        }
      }

  })
  
  window.localStorage.setItem(dataTheme)
}