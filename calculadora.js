function calcular() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operador = document.getElementById('operador').value;
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = 'Por favor, insira dois números válidos.';
  } else {
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          resultado = 'Não é possível dividir por zero.';
        } else {
          resultado = num1 / num2;
        }
        break;
      default:
        resultado = 'Operador inválido.';
    }
  }

  document.getElementById('resultado').textContent = Resultado: ${resultado};
}
