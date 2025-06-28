const logo = document.querySelector('.logo-img');
if (logo) {
    logo.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const texto = btn.textContent.toLowerCase();

        if (texto.includes('compre')) {
            e.preventDefault();
            alert('Obrigado pelo interesse! Confira nosso menu para mais opções.');
            btn.focus();
            return;
        }

        if (texto.includes('carrinho')) {
            e.preventDefault();
            btn.classList.add('added');
            setTimeout(() => btn.classList.remove('added'), 1000);
            alert('Produto adicionado ao carrinho!');
            btn.focus();
        }
    });
});