# 🏋️‍♀️ Projeto Atleta - Dados (IMC, Média)

## Resumo do Projeto

Este projeto estende a solução anterior, implementando uma estrutura orientada a objetos em JavaScript para gerenciar e calcular parâmetros de atletas. O objetivo principal é criar uma class Atleta que encapsule os dados e os métodos de cálculo.

## 🛠️ Tecnologias Utilizadas

*   **JavaScript (ES6+):** Linguagem de programação principal, com foco em classes e orientação a objetos.
*   **Node.js:** Ambiente de execução para rodar o script.

## 📂 Estrutura do Projeto

O projeto é composto por um único arquivo JavaScript que contém a classe `Atleta`, os dados de entrada e a lógica de execução:

.
└── dados_atletas.js


## 🚀 Como Executar

Para executar o projeto, você precisa ter o Node.js instalado em sua máquina.

1.  Salve o conteúdo do código em um arquivo chamado `dados_atletas.js`.
2.  Abra o terminal na pasta onde o arquivo foi salvo.
3.  Execute o script com o comando `node`:

        node dados_atletas.js

## 📊 Dados de Entrada (Exemplo)
O script utiliza o seguinte objeto para instanciar a classe Atleta:

```  const dadosAtleta = [
    {
        nome: "Cesar Abascal",
        idade: 30,
        peso: 80,
        altura: 1.70,
        notas: [10, 9.34, 8.42, 10, 7.88]
    }
];
```

## 📋 Exemplo de Saída
A saída esperada no console, que demonstra o encapsulamento e os cálculos da classe, é a seguinte:

```   --- Processamento de Atletas e Cálculos ---
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27,6816608997
Média válida: 9,2533333333

-------------------------------------------------------
```






