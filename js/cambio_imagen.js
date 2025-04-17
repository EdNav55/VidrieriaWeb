function funcionesGaleria(id) {
    const btnAnterior = document.querySelector(`#${id} .btn-anterior`);
    const btnSiguiente = document.querySelector(`#${id} .btn-siguiente`);
    const parteVisible = document.getElementById(id);
    const contenedorGaleria = document.querySelector(`#${id} div`);

    let intervaloDesplazamiento;
    const velocidadDesplazamiento = 8;

    function iniciarDesplazamiento(direccion) {
        clearInterval(intervaloDesplazamiento);
        intervaloDesplazamiento = setInterval(() => {
            const contenedorGaleriaRect = contenedorGaleria.getBoundingClientRect();
            const parteVisibleRect = parteVisible.getBoundingClientRect();
    
            // Indica los pixeles que se ha modivo hacia la izquierda o derecha
            const currentTranslateX = parseFloat(contenedorGaleria.style.transform.replace('translateX(', '').replace('px)', '') || 0);

            const dentroLimites =
                (contenedorGaleriaRect.left + direccion <= parteVisibleRect.left &&
                    contenedorGaleriaRect.right + direccion >= parteVisibleRect.right);

            if (dentroLimites) {
                contenedorGaleria.style.transform = `translateX(${currentTranslateX + direccion}px)`
            } else {
                detenerDesplazamiento();
            }
        }, 15);
    }

    function detenerDesplazamiento() {
        clearInterval(intervaloDesplazamiento);
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

funcionesGaleria("galeria_puertas");
funcionesGaleria("galeria_ventanas");
funcionesGaleria("galeria_canceles");
funcionesGaleria("galeria_otros");