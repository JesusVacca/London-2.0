const hamburguesa = document.getElementById("hamburguesa");
const enlaces_catalogo = document.querySelectorAll(".enlaces-catalogo");
const close_modal = document.getElementById("close-modal");
const fecha = document.getElementById("fecha");
fecha.innerText =` ${new Date().getFullYear()}`;

enlaces_catalogo.forEach((cadaEnlace,i)=>{
    enlaces_catalogo[i].addEventListener("click",(e)=>{
        e.preventDefault();
        enlaces_catalogo.forEach((item,j)=>{
            enlaces_catalogo[j].classList.remove("activo");
        })
        enlaces_catalogo[i].classList.add("activo");
    })
})
hamburguesa.onclick = ()=>{
    document.getElementById("menu-items").classList.toggle("activo");
}
close_modal.onclick = ()=>{
    ocultarModal("none")
}

function ocultarModal(params) {
    document.getElementById("ventana-modal").style.display=params;
}
