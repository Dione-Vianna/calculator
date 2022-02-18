// função que adiciona números ao visor
function valor(numero) {
  console.log(numero);
  if (typeof gvisor == 'undefined') {
    document.calculadora.visor.value = '';
  }

  console.log(document.calculadora);
  document.calculadora.visor.value = document.calculadora.visor.value + numero;
  gvisor = 1;
}

// função que limpa o visor
function Limpar() {
  document.calculadora.visor.value = '';
  delete gvalor;
  delete gnumero;
  delete gvisor;
}

// função que executa as operações
function calcOper(cal, valor1, valor2) {
  if (cal == 'adicao') {
    var valor = parseFloat(valor1) + parseFloat(valor2);
  } else if (cal == 'subtracao') {
    var valor = valor1 - valor2;
  } else if (cal == 'multiplicar') {
    var valor = valor1 * valor2;
  } else {
    var valor = valor1 / valor2;
  }
  return valor;
}

// algoritimo de passagem das ações do usiuário
function calculo(cal) {
  var valor = document.calculadora.visor.value;
  delete gvisor;

  if (typeof gnumero != 'undefined' && cal == 'resultado') {
    gvalor = calcOper(gnumero, gvalor, valor);
    document.calculadora.visor.value = gvalor;
    delete cal;
    delete gvalor;
    return 0;
  }

  if (typeof gvalor != 'undefined') {
    gvalor = calcOper(gnumero, gvalor, valor);
    gnumero = cal;
    document.calculadora.visor.value = gvalor;
  } else {
    gvalor = valor;
    gnumero = cal;
  }
}
