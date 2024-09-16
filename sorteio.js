// Lista de 14 nomes para o sorteio
const nomes = ['Ana', 'Bruno', 'Carla', 'Diego', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Juliana', 'Karen', 'Lucas', 'Mariana', 'Natália', 'Otávio'];

// Função para embaralhar a lista de nomes (usando o algoritmo Fisher-Yates)
function embaralhar(array) {
    // Percorre o array de trás para frente
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca o elemento na posição i com o elemento na posição j
        [array[i], array[j]] = [array[j], array[i]];  // Troca de valores usando desestruturação
    }
    // Retorna o array embaralhado
    return array;
}

// Embaralha a lista de nomes
const nomesEmbaralhados = embaralhar(nomes);

// Divide a lista embaralhada em dois grupos de 7 nomes
const grupo1 = nomesEmbaralhados.slice(0, 7);  // Seleciona os primeiros 7 nomes
const grupo2 = nomesEmbaralhados.slice(7, 14); // Seleciona os próximos 7 nomes

// Exibe os dois grupos no console
console.log("Grupo 1:", grupo1);
console.log("Grupo 2:", grupo2);
