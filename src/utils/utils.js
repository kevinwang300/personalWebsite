import "../website.css";

export function navbarActive(id, brand=false) {
    let navbarElem = document.getElementById(id)
    navbarElem.classList.add("background-active")
    if (!brand) {
        navbarElem.classList.add("font-weight-bold")
    }
}

export function navbarUnactive(id, brand=false) {
    let navbarElem = document.getElementById(id)
    navbarElem.classList.remove("background-active")
    if (!brand) {
        navbarElem.classList.remove("font-weight-bold")
    }
}
