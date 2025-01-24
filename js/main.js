const form = document.querySelector('.contacto__form');
const formBtn = document.querySelector('.contacto__form__button');

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
