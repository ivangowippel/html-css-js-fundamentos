/*
Exemplo de uma tabuada
*/

//Declaração de uma função
function calculaTabuada() {

  //Obtendo do DOM o tbody da tabela
  let tabuada = document.querySelector("#tabuada tbody");
  //Obtendo o valor A do campo input number e convertendo em inteiro
  let valorA = parseInt(document.querySelector("#valorA").value);
  //Limpando o conteúdo do tbody
  tabuada.innerHTML = ''; /*limpa a tabela*/
  //Criando um laço de repetição de 0 a 10
  for (let valorB = 0; valorB <= 10; valorB++) {

    //Calculando o resultado da linha atual
    let resultado = valorA * valorB;

    //Criando um template das colunas da linha atual
    let template = `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
      `;

    //Criando o elemento tr
    let tr = document.createElement('tr'); /*cria o html dinamicamente como se fosse um objeto*/
    //Inserindo as colunas na linha
    tr.innerHTML = template; /*coloca o template dentro da linha criada anteriormente*/
    //Inserindo a linha na tabela
    tabuada.append(tr); /*pega a tr (tabela) e adiciona no final*/

  }//Fechando o for

}//Fechando a função

//Chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);
