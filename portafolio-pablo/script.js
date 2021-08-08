/* ****** Menu ****** */
((d) => {
  // var of DOM
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu")

  $btnMenu.addEventListener("click", e => {
    // console.log('e', e)
    $btnMenu.firstElementChild.classList.toggle("none")
    $btnMenu.lastElementChild.classList.toggle("none")
    $menu.classList.toggle("is-active")
  })

  // event delegation to close the menuwhen a link is clicked
  d.addEventListener("click", e => {
    if (!e.target.matches(".menu a")) return false

    $btnMenu.firstElementChild.classList.remove("none")
    $btnMenu.lastElementChild.classList.add("none")
    $menu.classList.remove("is-active")
  })
})(document);