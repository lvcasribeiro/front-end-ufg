function buscaCidades(uf) {
    const selectCidade = document.getElementById('cidade');
    
    selectCidade.innerHTML = '<option value="">Selecione uma cidade</option>';
    
    if (!uf) return;
    
    let cidades = [];
    
    switch(uf) {
        case 'AC':
            cidades = ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'];
            break;
        case 'AL':
            cidades = ['Maceió', 'Arapiraca', 'Palmeira dos Índios'];
            break;
        case 'AP':
            cidades = ['Macapá', 'Santana', 'Laranjal do Jari'];
            break;
        case 'GO':
            cidades = ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'];
            break;
        case 'MG':
            cidades = ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'];
            break;
        case 'RJ':
            cidades = ['Rio de Janeiro', 'Niterói', 'Nova Iguaçu', 'Duque de Caxias'];
            break;
        case 'SP':
            cidades = ['São Paulo', 'Campinas', 'São Bernardo do Campo', 'Santo André', 'Osasco'];
            break;
        default:
            cidades = [];
    }
    
    // Usando map para criar as options
    cidades.map(cidade => {
        const option = document.createElement('option');
        option.value = cidade;
        option.textContent = cidade;
        selectCidade.appendChild(option);
    });
}