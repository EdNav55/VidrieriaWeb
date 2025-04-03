function cambioVisibilidadId(idSeleccionado) {
    document.querySelectorAll(".materiales-li").forEach((element) => {
        if(element.id === idSeleccionado) {
            element.classList.add("visible");
            element.classList.remove("hidden");
        } else {
            element.classList.remove("visible");
            element.classList.add("hidden");
        }
    })
}

function cambioVisibilidadChild(numero) {
    let padre = document.querySelector(".lista-materiales");
    for(let i = 0; i < padre.children.length; i++) {
        if(i === numero) {
            padre.children[i].classList.add("materiales-sel");
        } else {
            padre.children[i].classList.remove("materiales-sel");
        }
    }
}

document.querySelector(".lista-materiales li:nth-child(1)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("nacional");
    cambioVisibilidadChild(0);
});

document.querySelector(".lista-materiales li:nth-child(2)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("espaniola");
    cambioVisibilidadChild(1);
});

document.querySelector(".lista-materiales li:nth-child(3)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("eurovent");
    cambioVisibilidadChild(2);
});

document.querySelector(".lista-materiales li:nth-child(4)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("vidrios");
    cambioVisibilidadChild(3);
});

document.querySelector(".lista-materiales li:nth-child(5)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("vidrio_templado");
    cambioVisibilidadChild(4);
});

document.querySelector(".lista-materiales li:nth-child(6)").addEventListener("mouseenter", function() {
    cambioVisibilidadId("acri_poli");
    cambioVisibilidadChild(5);
});