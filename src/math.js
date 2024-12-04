function fatorial(num) {
  if (typeof num !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (num < 0) {
    throw new Error('Não existe fatorial para números negativos');
  }
  if (num === 0 || num === 1) return 1;

  return num * fatorial(num - 1);
}

function fibonacci(num) {
  if (typeof num !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (num <= 0) {
    throw new Error('Não existe Fibonacci para números menores ou iguais a zero');
  }
  if (num === 1) return 0; // Fibonacci(1) = 0
  if (num === 2) return 1; // Fibonacci(2) = 1

  let a = 0, b = 1, next;
  for (let i = 2; i < num; i++) {
    next = a + b;
    a = b;
    b = next;
    console.log(`Fibonacci(${i+1}) = ${b}`); // Fibonacci(num) correto com indexação
  }

  return a + b; // Fibonacci(num)
}



function ehPrimo(num) {
  if (typeof num !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (num <= 1) {
    throw new Error('Não existe número primo menor ou igual a 1');
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};
