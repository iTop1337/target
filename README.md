# Tarefas Processo da target

## 1. **Verificar se um número pertence à sequência de Fibonacci**
Esta tarefa envolve a criação de um programa que verifica se um número informado pelo usuário pertence à sequência de Fibonacci. O código cria uma função que gera os números de Fibonacci até o número informado e verifica se ele faz parte da sequência.

## 2. **Cálculo de menor, maior e média do faturamento diário**
Neste exercício, o programa analisa um vetor de faturamento diário e calcula:
- O menor e o maior valor de faturamento ocorrido em um dia.
- O número de dias em que o faturamento diário foi superior à média mensal.

## 3. **Faturamento mensal detalhado por estado**
A tarefa exige o cálculo do percentual de faturamento que cada estado teve dentro do valor total mensal de uma distribuidora. Para isso, os valores de faturamento de cada estado são fornecidos e o programa calcula a participação de cada um no total mensal.

## 4. **Inverter caracteres de uma string**
O programa recebe uma string e a inverte, sem usar funções prontas como `reverse`. Isso é feito utilizando um loop que percorre os caracteres da string de trás para frente e os armazena em uma nova string.

## 5. **Inverter caracteres de uma string com entrada interativa**
Esta tarefa realiza o mesmo objetivo da quarta, mas com a diferença de que o usuário pode informar a string dinamicamente. Para isso, usamos o módulo `readline` do Node.js, que permite ler a entrada do usuário de maneira interativa no terminal.

### Motivo de usar o `readline`:
O **`readline`** é um módulo do Node.js que permite ler entradas do usuário via terminal de forma assíncrona, ou seja, sem bloquear a execução do programa. Ele é útil em programas de linha de comando onde você precisa capturar dados fornecidos pelo usuário e usá-los para realizar cálculos ou outras operações. Com ele, o fluxo de execução do programa continua enquanto o usuário fornece as entradas, tornando o código mais dinâmico e interativo.
