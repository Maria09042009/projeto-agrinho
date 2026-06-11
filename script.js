
// Função para mostrar informações detalhadas ao clicar nas culturas
function mostrarDetalhes(cultura, descricao) {
    const painel = document.getElementById('painel-info');
    const titulo = document.getElementById('info-titulo');
    const texto = document.getElementById('info-texto');

    // Altera o conteúdo do painel
    titulo.innerText = cultura;
    texto.innerText = descricao;

    // Remove a classe que esconde o painel, tornando-o visível
    painel.classList.remove('escondido');
    
    // Rola a página suavemente até o painel
    painel.scrollIntoView({ behavior: 'smooth' });
}
