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

function funcionesGaleriaTactil(id) {
    const parteVisible = document.getElementById(id);
    const contenedorGaleria = document.querySelector(`#${id} div`);
    let startX = 0;
    let currentX = 0;

    function touchStart(e) {
        startX = e.touches[0].clientX;
        contenedorGaleria.style.transition = 'none';
    }

    function touchMove(e) {
        if (!startX) return;

        const touchX = e.touches[0].clientX;
        const diffX = touchX - startX;
        const nuevoX = currentX + diffX;

        const contenedorRect = contenedorGaleria.getBoundingClientRect();
        const parteVisibleRect = parteVisible.getBoundingClientRect();

        const limiteDerecho = 0;
        const limiteIzquierdo = parteVisibleRect.width - contenedorRect.width;

        if (nuevoX > limiteDerecho) {
            currentX = limiteDerecho;
        } else if (nuevoX < limiteIzquierdo) {
            currentX = limiteIzquierdo;
        } else {
            currentX = nuevoX;
        }

        contenedorGaleria.style.transform = `translateX(${currentX}px)`;
        startX = touchX;
    }

    function touchEnd() {
        startX = null;
        contenedorGaleria.style.transition = 'transform 0.3s ease-out';
    }

    contenedorGaleria.addEventListener('touchstart', touchStart);
    contenedorGaleria.addEventListener('touchmove', touchMove);
    contenedorGaleria.addEventListener('touchend', touchEnd);
    contenedorGaleria.addEventListener('touchcancel', touchEnd);
}

function inicializaFunciones(id) {
    funcionesGaleria(id);
    funcionesGaleriaTactil(id);
}

inicializaFunciones("galeria_puertas");
inicializaFunciones("galeria_ventanas");
inicializaFunciones("galeria_canceles");
inicializaFunciones("galeria_otros");