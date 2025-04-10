function funcionesGaleria(ruta_imagenes, id) {
    const m = ruta_imagenes.length;
    let indice = 0;
    const imagenes = document.querySelectorAll(`#${id} img`);

    function modulo(n) {
        return ((n % m) + m) % m;
    }

    function actializarImagen() {

    }

    document.querySelector(`#${id} .btn-anterior`).addEventListener("mousedown", () => {
        
    });
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