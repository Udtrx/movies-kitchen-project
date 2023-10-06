const btn = document.querySelector('.up_btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

let derniere_position_de_scroll_connue = 0;
window.addEventListener("scroll", function (e) {
    derniere_position_de_scroll_connue = window.scrollY;
    console.log("derniere_position_de_scroll_connue",derniere_position_de_scroll_connue)
   if (derniere_position_de_scroll_connue > 900) {
      btn.style.display ="flex";
    }
    if (derniere_position_de_scroll_connue < 900) {
        btn.style.display ="none";
      }
})


