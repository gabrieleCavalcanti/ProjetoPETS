document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const inputEmail = document.getElementById('email');
    const inputCPF = document.getElementById('cpf');

    form.addEventListener('submit', function (evento) {
        // Impede o envio padrão
        evento.preventDefault();

        // Limpa mensagens antigas
        inputEmail.setCustomValidity('');
        inputCPF.setCustomValidity('');

        // Validações
        const emailValido = validarEmail(inputEmail.value);
        const cpfValido = validarCPF(inputCPF.value);

        if (!emailValido) {
            inputEmail.setCustomValidity('Formato de e-mail inválido (ex: joao.silva@net.com)');
        }

        if (!cpfValido) {
            inputCPF.setCustomValidity('Formato de CPF inválido (ex: 999.999.999-99)');
        }

        // Mostra mensagens automáticas do navegador
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Se tudo estiver certo
        alert('Formulário enviado com sucesso!');
        form.reset();
    });

    // Validações ao digitar (para limpar erro ao corrigir)
    inputEmail.addEventListener('input', () => inputEmail.setCustomValidity(''));
    inputCPF.addEventListener('input', () => inputCPF.setCustomValidity(''));

    // Funções de validação
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }
});
