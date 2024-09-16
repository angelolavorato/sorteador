1. `const nomes = [...]`: Cria um array com 14 nomes, que serão usados no sorteio.
2. `function embaralhar(array) {...}`: Define uma função chamada `embaralhar` que recebe um array como parâmetro e embaralha seus elementos. Usamos o algoritmo **Fisher-Yates**, que embaralha de maneira eficiente e justa.
3. `for (let i = array.length - 1; i > 0; i--)`: O loop percorre o array de trás para frente (começando no último elemento). O índice `i` vai de `array.length - 1` (última posição) até `1` (primeira posição).
4. `const j = Math.floor(Math.random() * (i + 1))`: Gera um índice aleatório `j` entre 0 e `i` usando `Math.random()`, que gera um número entre 0 e 1, multiplicado pelo valor de `i + 1` e arredondado para baixo com `Math.floor()`.
5. `[array[i], array[j]] = [array[j], array[i]]`: Usa a desestruturação de arrays para trocar os elementos nas posições `i` e `j`. Isso é o que embaralha os elementos.
6. `return array`: Retorna o array embaralhado após o fim do loop.
7. `const nomesEmbaralhados = embaralhar(nomes)`: Chama a função `embaralhar` com o array de nomes e armazena o resultado (array embaralhado) na variável `nomesEmbaralhados`.
8. `const grupo1 = nomesEmbaralhados.slice(0, 7)`: Usa a função `slice` para pegar os primeiros 7 elementos do array embaralhado e os coloca no `grupo1`.
9. `const grupo2 = nomesEmbaralhados.slice(7, 14)`: Pega os próximos 7 elementos (do índice 7 ao 13) e os coloca no `grupo2`.
10. `console.log("Grupo 1:", grupo1)`: Exibe o conteúdo do `grupo1` no console.
11. `console.log("Grupo 2:", grupo2)`: Exibe o conteúdo do `grupo2` no console.
