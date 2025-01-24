// Variables formulario

const form = document.querySelector('.contacto__form');
const formBtn = document.querySelector('.contacto__form__button');

// Variables botón ir arriba e indicador de scroll

const boton_ir_arriba = document.querySelector('#ir_arriba_boton');
const barra_indicador = document.querySelector('.indicador_scroll');
const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop;

// Manejo del formulario

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalText = formBtn.textContent;

    formBtn.textContent = 'Enviado ✔';
    formBtn.classList.add('enviado');
    formBtn.disabled = true;

    setTimeout(() => {
        formBtn.textContent = originalText;
        formBtn.classList.remove('enviado');
        formBtn.disabled = false;
    }, 3000);

    form.reset();
});


// Manejo del botón ir arriba e indicador

const irArriba = () => {
    if (obtener_pixeles_inicio() > 0) {
        scrollTo(0, 0);
    }
}

const indicarScroll = () => {
    if (obtener_pixeles_inicio() > 50) {
        boton_ir_arriba.className = 'mostrar'
    } else {
        boton_ir_arriba.className = 'ocultar'
    }

    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let avance_scroll = (obtener_pixeles_inicio() / alto) * 100;
    barra_indicador.style.width = `${avance_scroll}%`;
}

boton_ir_arriba.addEventListener('click', irArriba);

window.addEventListener('scroll', indicarScroll);