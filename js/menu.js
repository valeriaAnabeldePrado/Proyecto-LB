export default function hamburgerMenu(panelBtn,panel){
    const d = document

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn, panel)|| e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
})

}
