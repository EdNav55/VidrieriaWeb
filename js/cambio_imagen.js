function funcionesGaleria(imagenes, id) {
    const m = imagenes.length;
    let indice = 0;
    const izq = document.querySelector(`#${id} .img-izquierda`);
    const selec = document.querySelector(`#${id} .img-seleccionada`);
    const der = document.querySelector(`#${id} .img-derecha`);

    function actializarImagen() {
        izq.src = imagenes[indice];
        selec.src = imagenes[modulo(indice + 1)];
        der.src = imagenes[modulo(indice + 2)];
    }

    function modulo(n) {
        return ((n % m) + m) % m;
    };

    document.querySelector(`#${id} .btn-anterior`).addEventListener("click", () => {
        indice = modulo(indice - 1);
        actializarImagen();
    });

    document.querySelector(`#${id} .btn-siguiente`).addEventListener("click", () => {
        indice = modulo(indice + 1);
        actializarImagen();
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

funcionesGaleria(imagenes_puertas, "galeria");