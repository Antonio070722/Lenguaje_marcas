function validar() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;

    /**
     * Expresión regular para validar el nombre:
     * ^ = comienza desde el inicio de la cadena
     * [A-Z] = la primera letra debe ser mayúscula
     * [A-Za-záéíóúñ\s]* = puede haber letras mayúsculas, minúsculas, con tildes, ñ, espacios, 0 o más veces
     * $ = termina aquí
     */
    const expresRegNombre = /^[A-Z][A-Za-záéíóúñ\s]*$/;
    
    /**
     * Expresión regular para validar el apellidos:
     * ^ = comienza desde el inicio de la cadena
     * [A-Z] = la primera letra debe ser mayúscula
     * [A-Za-záéíóúñ\s]* = puede haber letras mayúsculas, minúsculas, con tildes, ñ, espacios, 0 o más veces
     * $ = termina aquí
     */
    const expresRegApellidos = /^[A-Z][A-Za-záéíóúñ\s]*$/;
    
    /**
     * Expresión regular para validar email:
     * ^ = comienza desde el inicio
     * [a-z0-9]+ = se permiten letras minúsculas y números antes del @, 1 o más veces
     * @ = arroba
     * (gmail|outlook|yahoo|cloud) = uno de estos dominios
     * \. = punto literal, el caracter '\' es para que se interprete como un carácter especial
     * (es|com|org) = que termine en uno de estos
     * $ = termina aquí
     */
    const expresRegEmail = /^[a-z0-9]+@(gmail|outlook|yahoo|cloud)\.(es|com|org)$/;


    

    if (!expresRegNombre.test(nombre) || nombre === '') {
        alert('Nombre inválido o campo vacío. Formato: Primera letra mayúscula. \nFormulario no enviado.');
        return false;
    }

    if (!expresRegApellidos.test(apellidos) || apellidos === '') {
        alert('Apellidos inválidos o campo vacío. Formato: Primera letra mayúscula y el resto minúsculas. \nFormulario no enviado.');
        return false;
    }

    if (!expresRegEmail.test(email) || email === '') {
        alert('Email inválido o campo vacío. Formato: usuario@(gmail / outlook / yahoo / cloud).(es / com / org). \nFormulario no enviado.');
        return false;
    }
    
    alert('Formulario enviado.');
    return true;
}
