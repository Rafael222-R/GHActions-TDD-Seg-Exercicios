const { fatorial, fibonacci, ehPrimo } = require('./math');

describe('função fatorial', () => {
  test('valida entrada', () => {
    // Verifica se a função 'fatorial' está definida
    expect(fatorial).toBeDefined();
    // Verifica se a função 'fatorial' aceita 1 argumento
    expect(fatorial.length).toBe(1);

    // Garantir que o argumento é um número válido
    expect(() => fatorial("Texto")).toThrow(TypeError);
    expect(() => fatorial("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => fatorial(10)).not.toThrow(TypeError);

    // Garantir que números negativos não são permitidos
    expect(() => fatorial(-10)).toThrow(Error);
    expect(() => fatorial(-10)).toThrow("Não existe fatorial para números negativos");
  });

  test('calcula fatorial de 5 corretamente', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('calcula fatorial de 0 corretamente', () => {
    expect(fatorial(0)).toBe(1);
  });
});

describe('função fibonacci', () => {
    test('valida entrada', () => {
      expect(fibonacci).toBeDefined();
      expect(fibonacci.length).toBe(1);
  
      expect(() => fibonacci("Texto")).toThrow(TypeError);
      expect(() => fibonacci("Texto")).toThrow("O argumento deve ser um número válido");
      expect(() => fibonacci(10)).not.toThrow(TypeError);
  
      expect(() => fibonacci(0)).toThrow(Error);
      expect(() => fibonacci(0)).toThrow("Não existe Fibonacci para números menores ou iguais a zero");
      expect(() => fibonacci(-10)).toThrow(Error);
      expect(() => fibonacci(-10)).toThrow("Não existe Fibonacci para números menores ou iguais a zero");
    });
  
    test('retorna o número de Fibonacci de 8 corretamente', () => {
      expect(fibonacci(8)).toBe(21);  // Fibonacci(8) deve ser 21
    });
  
    test('retorna o número de Fibonacci de 10 corretamente', () => {
      expect(fibonacci(10)).toBe(55);  // Fibonacci(10) deve ser 55
    });
  });
  

describe('função ehPrimo', () => {
  test('valida entrada', () => {
    // Verifica se a função 'ehPrimo' está definida
    expect(ehPrimo).toBeDefined();
    // Verifica se a função 'ehPrimo' aceita 1 argumento
    expect(ehPrimo.length).toBe(1);

    // Garantir que o argumento é um número válido
    expect(() => ehPrimo("Texto")).toThrow(TypeError);
    expect(() => ehPrimo("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => ehPrimo(10)).not.toThrow(TypeError);

    // Garantir que números menores ou iguais a 1 não são válidos
    expect(() => ehPrimo(1)).toThrow(Error);
    expect(() => ehPrimo(1)).toThrow("Não existe número primo menor ou igual a 1");
    expect(() => ehPrimo(0)).toThrow(Error);
    expect(() => ehPrimo(0)).toThrow("Não existe número primo menor ou igual a 1");
    expect(() => ehPrimo(-2)).toThrow(Error);
    expect(() => ehPrimo(-2)).toThrow("Não existe número primo menor ou igual a 1");
  });

  test('verifica que 7 e 11 são números primos', () => {
    expect(ehPrimo(7)).toBe(true);
    expect(ehPrimo(11)).toBe(true);
  });

  test('verifica que 6 e 10 não são números primos', () => {
    expect(ehPrimo(6)).toBe(false);
    expect(ehPrimo(10)).toBe(false);
  });
});
