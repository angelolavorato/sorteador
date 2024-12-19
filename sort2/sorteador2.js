function gerarSequenciasAleatorias(qtdSequencias, qtdNumeros, min, max) {
  const sequencias = []

  // Função para gerar uma sequência aleatória sem repetição
  function gerarSequencia() {
    const numeros = []
    while (numeros.length < qtdNumeros) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min
      if (!numeros.includes(numero)) {
        numeros.push(numero)
      }
    }
    return numeros.sort((a, b) => a - b) // Ordena os números
  }

  // Gerar múltiplas sequências
  for (let i = 0; i < qtdSequencias; i++) {
    sequencias.push(gerarSequencia())
  }

  return sequencias
}

// Configurações
const qtdSequencias = 4 // Número de sequências
const qtdNumeros = 6 // Números por sequência
const min = 1 // Valor mínimo
const max = 60 // Valor máximo

// Gerar e exibir as sequências
const sequenciasAleatorias = gerarSequenciasAleatorias(
  qtdSequencias,
  qtdNumeros,
  min,
  max
)
console.log('Sequências Aleatórias:', sequenciasAleatorias)
