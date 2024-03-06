var senhaInput = document.querySelector('.inputSenha');
var iconeOlho = document.querySelector('.icone-olho');

iconeOlho.addEventListener('click', function() {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        iconeOlho.classList.remove('fa-eye-slash');
        iconeOlho.classList.add('fa-eye');
    } else {
        senhaInput.type = 'password';
        iconeOlho.classList.remove('fa-eye');
        iconeOlho.classList.add('fa-eye-slash');
    }
});
