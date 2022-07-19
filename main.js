// função que adiciona números ao visor

// let valor = 0;

function valor(numero) {
  if (typeof gvisor == 'undefined') {
    document.calculadora.visor.value = '';
  }

  document.calculadora.visor.value = document.calculadora.visor.value + numero;
  gvisor = 1;
}

// função que executa as operações
function calcOper(cal, valor1, valor2) {
  console.log('cal', cal);
  if (cal == 'resultado') return;
  switch (cal) {
    case '+':
      return parseFloat(valor1) + parseFloat(valor2);
      break;
    case '-':
      return valor1 - valor2;
      break;
    case '*':
      return valor1 * valor2;
      break;
    case '/':
      return valor1 / valor2;
      break;
    default:
  }
}

// algoritimo de passagem das ações do usuário
function calculo(cal) {
  var valor = document.calculadora.visor.value;
  delete gvisor;

  console.log(cal);
  console.log(valor);

  if (typeof gnumero != 'undefined' && cal == 'resultado') {
    gvalor = calcOper(gnumero, gvalor, valor);
    document.calculadora.visor.value = gvalor;

    delete cal;
    delete gvalor;
    return 0;
  }

  if (typeof gvalor != 'undefined') {
    gvalor = calcOper(gnumero, gvalor, valor);
    if (typeof gvalor != 'undefined') return;
    gnumero = cal;
    document.calculadora.visor.value = gvalor;
  } else {
    gvalor = valor;
    gnumero = cal;
  }
}

// função que limpa o visor
function Limpar() {
  document.calculadora.visor.value = '';
  delete gvalor;
  delete gnumero;
  delete gvisor;
}
