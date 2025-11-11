const tabelaCorpo = document.getElementById('listaPets');
const urlDados = 'data/dados.json';

function carregarCatalogoJSON() {

    fetch(urlDados)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            renderizarPets(data);
        })
        .catch(error => {
            console.error('Houve um erro ao carregar o catálogo:', error);
            tabelaCorpo.innerHTML = `<tr><td colspan="3">Erro ao carregar os pets.</td></tr>`;
        });
}

function renderizarPets(pets) {

    let htmlPets = '';

    pets.forEach(pets => {
        htmlPets += ` 
                    <tr> 
                        <td><img src="${pets.imagem.src}" alt="${pets.imagem.alt}" width="70"></td> 
                        <td>${pets.nome}</td> 
                        <td>${pets.idade}</td> 
                        <td>${pets.historia}</td>
                    </tr> 
                `;
    });

    tabelaCorpo.innerHTML = htmlPets;

}

// 4. Inicia o carregamento 
carregarCatalogoJSON(); 