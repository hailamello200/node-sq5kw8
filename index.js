/**
 * Desafio: escrever uma função que valide se uma palavra é valida em um tabuleiro de Parole.
 * A função irá receber dois argumentos:
 * - Um array bi-dimensional (NxN) com letras de A a Z representando o tabuleiro
 * - Uma palavra que deve ser validada
 *
 * Palavras válidas são formadas por ligações adjacentes das letras (horizontas, vertical, diagonal) sem reutilizar as posições usadas anteriormente.
 *
 * Exemplo de um valor de entrada:
 * [ ["I","L","A","W"],
 *   ["B","N","G","E"],
 *   ["I","U","A","O"],
 *   ["A","S","R","L"] ]
 *
 * Neste caso, podemos considerar:
 * - "BINGO", "ILNBIA", "LINGO" são palavras válidas.
 * - "BUNGIE", "SINUS", "BINS" são palavras inválidas.
 *
 * Não é necessário verificar se a palavra é real ou não, apenas se ela é valida no tabuleiro.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param tabuleiro array bidimensional representando o tabuleiro
 * @param palavra palavra que deve ser validada no tabuleiro
 * @returns `true` ou `false`, informando se a palavra é valida para o tabuleiro
 */
function parole(tabuleiro, palavra) {
 
var tab = [
    ['E', 'A', 'R', 'A'],
    ['N', 'L', 'E', 'C'],
    ['I', 'A', 'I', 'S'],
    ['B', 'Y', 'O', 'R']
  ];
  
/*console.log(parole(tab,"EAR"));*/

function parole(tabuleiro, palavra) {
  var vlog = false;
  var vposi_x = [];
  var vposi_y = [];
  var x;
  var y;
  /*var vocorrencias = tabuleiro.indexOf(palavra[0]);*//
  var text = "";
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }
  /*while (vocorrencias != -1) {
    console.log(vocorrencias);
  }*/
  /*
      y = vposi_y[vi - 1];
      x = vposi_x[vi - 1];

      if (FPosLetra(x - 1, y  , tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x - 1;
        vposi_y[vi] = y;
      } else if (FPosLetra(x  , y - 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x;
        vposi_y[vi] = y - 1;
      } else if (FPosLetra(x - 1, y - 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x - 1;
        vposi_y[vi] = y - 1;
      } else if (FPosLetra(x + 1, y  , tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x + 1;
        vposi_y[vi] = y;
      } else if (FPosLetra(x  , y + 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x;
        vposi_y[vi] = y + 1;
      } else if (FPosLetra(x + 1, y + 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x + 1;
        vposi_y[vi] = y + 1;
      } else if (FPosLetra(x - 1, y + 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x - 1;
        vposi_y[vi] = y + 1;
      } else if (FPosLetra(x + 1, y - 1, tabuleiro, palavra[vi])) {
        vlog    = true;
        vposi_x[vi] = x + 1;
        vposi_y[vi] = y - 1;
      }    
    }
    */
  return vtext;
}

/*function FPosLetra(vx, vy, varray, vletra) {
  return (varray[vy][vx] == vletra);
}*/

module.exports = parole;
