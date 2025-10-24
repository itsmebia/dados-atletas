// DADOS FORNECIDOS
const dadosAtleta = [
    {
        nome: "Cesar Abascal",
        idade: 30,
        peso: 80,
        altura: 1.70,
        notas: [10, 9.34, 8.42, 10, 7.88]
    }
];

// =============================================================
// CLASSE E LÓGICA

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this._categoria = null;
        this._imc = null;
        this._mediaValida = null;
    }

    // Cálculo
    calculaCategoria() {
        const idade = this.idade;
        if (idade >= 9 && idade <= 11) this._categoria = "Infantil";
        else if (idade >= 12 && idade <= 13) this._categoria = "Juvenil";
        else if (idade >= 14 && idade <= 15) this._categoria = "Intermediário";
        else if (idade >= 16 && idade <= 30) this._categoria = "Adulto";
        else this._categoria = "Sem categoria";
    }

    calculaIMC() {
        // Fórmula: imc = peso / (altura * altura)
        if (this.altura > 0) this._imc = this.peso / (this.altura * this.altura);
        else this._imc = 0;
    }

    calculaMediaValida() {
        // descarta maior e menor nota
        const notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, 4);
        const somaNotasValidas = notasValidas.reduce((soma, nota) => soma + nota, 0);
        this._mediaValida = notasValidas.length > 0 ? somaNotasValidas / notasValidas.length : 0;
    }

    // Métodos Obter (Getters)
    obtemNomeAtleta() { return this.nome; }
    obtemIdadeAtleta() { return this.idade; }
    obtemPesoAtleta() { return this.peso; }
    obtemAlturaAtleta() { return this.altura; }
    obtemNotasAtleta() { return this.notas; }

    obtemCategoria() {
        if (this._categoria === null) this.calculaCategoria();
        return this._categoria;
    }

    obtemIMC() {
        if (this._imc === null) this.calculaIMC();
        return this._imc;
    }

    obtemMediaValida() {
        if (this._mediaValida === null) this.calculaMediaValida();
        return this._mediaValida;
    }

    // Exibição
    exibirInformacoes() {
        this.calculaCategoria();
        this.calculaIMC();
        this.calculaMediaValida();

        const notasString = this.obtemNotasAtleta().join(',');
        const imcFormatado = this.obtemIMC().toLocaleString('pt-BR', { maximumFractionDigits: 10 });
        const mediaFormatada = this.obtemMediaValida().toLocaleString('pt-BR', { maximumFractionDigits: 10 });

        return `Nome: ${this.obtemNomeAtleta()}
Idade: ${this.obtemIdadeAtleta()}
Peso: ${this.obtemPesoAtleta()}
Altura: ${this.obtemAlturaAtleta()}
Notas: ${notasString}
Categoria: ${this.obtemCategoria()}
IMC: ${imcFormatado}
Média válida: ${mediaFormatada}\n`;
    }
}

// =============================================================
// EXECUÇÃO

const processarAtletas = (atletasData) => {
    console.log('--- Processamento de Atletas e Cálculos ---');

    atletasData.forEach(dados => {
        const atleta = new Atleta(
            dados.nome,
            dados.idade,
            dados.peso,
            dados.altura,
            dados.notas
        );
        console.log(atleta.exibirInformacoes());
    });

    console.log('-------------------------------------------------------');
};

processarAtletas(dadosAtleta);
