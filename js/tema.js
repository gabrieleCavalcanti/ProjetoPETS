document.addEventListener('DOMContentLoaded', function() { 

     

    const body = document.body; 

    const btnAlternarTema = document.getElementById('alternar-tema');  

 

    // ---------------------------------------------------- 

    // FUNÇÃO 1: APLICAR TEMA AO CARREGAR A PÁGINA 

    // ---------------------------------------------------- 

    function carregarTema() { 

        // 1. Tenta obter o tema salvo no localStorage. Padrão é 'light'. 

        const temaSalvo = localStorage.getItem('preferenciaTema') || 'light'; 

 

        if (temaSalvo === 'dark') { 

            body.classList.add('modo-escuro'); 

            if (btnAlternarTema) { 

                btnAlternarTema.textContent = '☀️'; 

            } 

        } else { 

            body.classList.remove('modo-escuro'); 

            if (btnAlternarTema) { 

                btnAlternarTema.textContent = '🌙'; 

            } 

        } 

    } 

 

    // ---------------------------------------------------- 

    // FUNÇÃO 2: SALVAR O TEMA QUANDO ELE MUDA 

    // ---------------------------------------------------- 

    function alternarESalvarTema() { 

        // Alterna (liga/desliga) a classe 'modo-escuro' no body 

        body.classList.toggle('modo-escuro'); 

 

        let novoTema; 

 

        if (body.classList.contains('modo-escuro')) { 

            novoTema = 'dark'; 

            btnAlternarTema.textContent = '☀️'; 

        } else { 

            novoTema = 'light'; 

            btnAlternarTema.textContent = '🌙'; 

        } 

 

        // Salva a nova preferência no localStorage 

        localStorage.setItem('preferenciaTema', novoTema); 

    } 

     

    // ---------------------------------------------------- 

    // INICIALIZAÇÃO 

    // ---------------------------------------------------- 

 

    // 1. Carrega o tema imediatamente ao carregar a página 

    carregarTema(); 

 

    // 2. Adiciona o evento de clique APENAS se o botão existir na página 

    if (btnAlternarTema) { 

        btnAlternarTema.addEventListener('click', alternarESalvarTema); 

    } 

}); 