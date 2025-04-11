function funcionesGaleria(ruta_imagenes, id) {
    const m = ruta_imagenes.length;
    let indice = 0;
    const imagenes = document.querySelectorAll(`#${id} img`);
    const btnAnterior = document.querySelector(`#${id} .btn-anterior`);
    const btnSiguiente = document.querySelector(`#${id} .btn-siguiente`);
    const contenedorGaleria = document.getElementById(id);

    let desplazamiento = 0;
    let intervaloDesplazamiento;
    const velocidadDesplazamiento = 10;

    function actualizarDesplazamiento(direccion) {
        imagenes.forEach(img => {
            const currentTranslateX = parseFloat(img.style.transform.replace('translateX(', '').replace('px)', '') || 0);
            img.style.transform = `translateX(${currentTranslateX + direccion}px)`;
        });
    }

    function iniciarDesplazamiento(direccion) {
        clearInterval(intervaloDesplazamiento);
        intervaloDesplazamiento = setInterval(() => {
            actualizarDesplazamiento(direccion);
        }, 20);
    }

    function detenerDesplazamiento() {
        clearInterval(intervaloDesplazamiento);
    }

    function modulo(n) {
        return ((n % m) + m) % m;
    }

    function cambioImagenes() {
        contador = 0;
        imagenes.forEach(img => {
            img.src = ruta_imagenes[modulo(indice + contador)];
        });
    }

    btnAnterior.addEventListener("mousedown", () => {
        iniciarDesplazamiento(velocidadDesplazamiento);
    });

    btnAnterior.addEventListener("mouseup", detenerDesplazamiento);

    btnAnterior.addEventListener("mouseleave", detenerDesplazamiento);

    btnSiguiente.addEventListener("mousedown", () => {
        iniciarDesplazamiento(-velocidadDesplazamiento);
    });

    btnSiguiente.addEventListener("mouseup", detenerDesplazamiento);

    btnSiguiente.addEventListener("mouseleave", detenerDesplazamiento);
}

const imagenes_puertas = [
    "imagenes/productos/puerta_1.jpg",
    "imagenes/productos/puerta_2.jpg",
    "imagenes/productos/puerta_3.jpg",
    "imagenes/productos/puerta_4.jpg",
    "imagenes/productos/puerta_5.jpg",
    "imagenes/productos/puerta_6.jpg",
    "imagenes/productos/puerta_7.jpg",
    "imagenes/productos/puerta_8.jpg",
    "imagenes/productos/puerta_9.jpg"
]

funcionesGaleria(imagenes_puertas, "galeria_puertas");

function cambioImagen() {
    const contenedorGaleria = document.getElementById(`galeria_puertas`);
    const primerHijo = contenedorGaleria.children[1];
    const ultimoHijo = contenedorGaleria.children[6];

    console.log(contenedorGaleria.offsetWidth);
    console.log(primerHijo.offsetWidth);
    primerHijo.style.transform = `translateX(${contenedorGaleria.offsetWidth}px)`;
}