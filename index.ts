interface Faturamento {
    dia: number;
    valor: number;
  }
  
  // **1
  const calcularSoma = () => {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
      K++;
      SOMA += K;
    }
  
    console.log("Desafio 1 - O valor de SOMA é:", SOMA);
  };
  
  // **2
  const isFibonacci = (num: number): boolean => {
    let a = 0;
    let b = 1;
  
    while (b < num) {
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return b === num || num === 0;
  };
  
  const verificarFibonacci = (num: number) => {
    if (isFibonacci(num)) {
      console.log(`Desafio 2 - ${num} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`Desafio 2 - ${num} não pertence à sequência de Fibonacci.`);
    }
  };
  
   // **3
  const analisarFaturamento = async () => {
    const response = await fetch('http://127.0.0.1:8081/dados/dados.json');
    const dados: Faturamento[] = await response.json();
  
    const diasComFaturamento = dados.filter((d) => d.valor > 0);
    const menorValor = Math.min(...diasComFaturamento.map((d) => d.valor));
    const maiorValor = Math.max(...diasComFaturamento.map((d) => d.valor));
    const total = diasComFaturamento.reduce((sum, d) => sum + d.valor, 0);
    const mediaMensal = total / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter((d) => d.valor > mediaMensal).length;
  
    console.log("Desafio 3 - Menor valor:", menorValor);
    console.log("Desafio 3 - Maior valor:", maiorValor);
    console.log("Desafio 3 - Dias acima da média:", diasAcimaDaMedia);
  };
  
  
  // **4
  const calcularPercentual = (faturamento: { [estado: string]: number }) => {
    const total = Object.values(faturamento).reduce((sum, valor) => sum + valor, 0);
    const percentuais: { [estado: string]: string } = {};
  
    for (const estado in faturamento) {
      percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + "%";
    }
  
    console.log("Desafio 4 - Percentuais de representação por estado:", percentuais);
  };
  
  // **5. 
  const inverterString = (str: string): string => {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  };
  
  const testarInversao = (str: string) => {
    console.log(`Desafio 5 - String original: "${str}", String invertida: "${inverterString(str)}"`);
  };
  
  // **Chamar as funções dos desafios**
  const executarDesafios = async () => {
    calcularSoma();
    verificarFibonacci(21); // Substitua o número para testar a sequência de Fibonacci
    await analisarFaturamento();
  
    const faturamentoMensal = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
    calcularPercentual(faturamentoMensal);
  
    testarInversao("Target Sistemas");
  };
  
  
  executarDesafios();
  