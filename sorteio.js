// Lista de 14 nomes para o sorteio
const nomes = [
  'Ana',
  'Fabiolla',
  'Nara',
  'Karine',
  'Mateus',
  'Arley',
  'Fabricia',
  'Heitor',
  'Iasmim'
]

// Função para embaralhar a lista de nomes (usando o algoritmo Fisher-Yates)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Embaralha a lista de nomes
const nomesEmbaralhados = embaralhar(nomes)

// Divide a lista embaralhada em dois grupos
const grupo1 = nomesEmbaralhados.slice(0, Math.ceil(nomesEmbaralhados.length / 2)) // Metade arredondada para cima
const grupo2 = nomesEmbaralhados.slice(Math.ceil(nomesEmbaralhados.length / 2)) // Restante

// Exibe os dois grupos no console
console.log('Grupo 1:', grupo1)
console.log('Grupo 2:', grupo2)
