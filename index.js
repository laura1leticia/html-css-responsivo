function gaveta(){
    let nav = document.querySelector("header nav");
    let overlay= document.querySelector("#overlay")
    nav.classList.add("active");
    overlay.classList.add("active");
}

function fecharGaveta(){
    let nav = document.querySelector("header nav");
    let overlay= document.querySelector("#overlay")
    nav.classList.remove("active");
    overlay.classList.remove("active");
}