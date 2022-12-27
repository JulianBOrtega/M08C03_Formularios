window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//*------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//*-------------------DE REGISTRO DE PELÍCULAS------------------// 
    
    document.querySelector('#title').focus();
    
    const notifyError = (errorElement, msg, field) => {
        errorElement.innerText = msg;
        errorElement.classList.add('error');
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
    };

    const clearErrors = (errorElement, field) => {
        errorElement.innerText = null;
        errorElement.classList.remove('error');
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
    };

    document.querySelector('#title').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorTitle');

        switch (true) {
            case !field.value.trim():
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
        
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    document.querySelector('#rating').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorRating');

        switch (true) {
            case !field.value.trim():
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
            case field.value < 0 || field.value > 10:
                notifyError(errorMsg, 'Debe tener un valor entre 0 y 10', field)
                break;
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    document.querySelector('#awards').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorAwards');

        switch (true) {
            case !field.value.trim():
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
            case field.value < 0 || field.value > 10:
                notifyError(errorMsg, 'Debe tener un valor entre 0 y 10', field)
                break;
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    document.querySelector('#release_date').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorRelease');

        switch (true) {
            case !field.value.trim():
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
        
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    document.querySelector('#length').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorLength');

        switch (true) {
            case !field.value.trim():
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
            case field.value < 60 || field.value > 360:
                notifyError(errorMsg, 'Debe tener un valor entre 60 y 360', field)
                break;
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    document.querySelector('#genre_id').addEventListener('blur', e =>
    {
        const field = e.target;
        const errorMsg = document.querySelector('#errorGenre');

        switch (true) {
            case field.value == '':
                notifyError(errorMsg, 'Este campo es obligatorio', field)
                break;
        
            default:
                clearErrors(errorMsg, field)
                break;
        }
    });

    const inputs = document.querySelectorAll('.validateInput')
    formulario.addEventListener('submit', e => 
    {
        e.preventDefault();
        const errorList = document.querySelector('.errores');
        errorList.innerHTML = '<b>Se encontraron errores</b>';
        let errorsFound = false;

        for (let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value || inputs[i].classList.contains('is-invalid'))
            {
                errorsFound = true;
                inputs[i].classList.add("is-invalid")
                errorList.innerHTML += '<li style="list-style: none;">El campo <i>' + inputs[i].name + '</i> contiene errores.</li>';
            }
        }

        if(errorsFound)
        {
            errorList.classList.remove('alert-ok')
            errorList.classList.add('alert-warning')
        } 
        else
        {
            errorList.classList.remove('alert-warning')
            errorList.classList.add('alert-ok')
            errorList.innerHTML = '<b>Película creada con éxito!</b>';
            setInterval(() => e.target.submit(), 1500);
        }
    });
}