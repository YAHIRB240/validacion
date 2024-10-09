document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nControl = document.getElementById('n-control').value.trim();   
        if (validarNumeroControl(nControl)) {
            this.submit();
        }
    });
    function validarNumeroControl(valor) {
        const regex = /^(1[8-9]|2[0-4])84\d{4}$/;
        if (!regex.test(valor)) {
            alert('El número de control debe comenzar con un número entre 18 y 24, seguido de 84 y otros 4 dígitos.');
            return false;
        }
        return true;
    }
});