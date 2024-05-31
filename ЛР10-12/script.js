function getInputValues() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);
    try {
      const result = calculate(a, b, c);
      alert(`Результат: ${result}`);
    } catch (e) {
      alert(`Ошибка: ${e.message}`);
    }
  }
  
  function calculate(a, b, c) {
    if (a === 4) {
      throw new Error("Деление на 0");
    }
    if (b * b - Math.PI < 0 || c + Math.PI < 0) {
      throw new Error("Отрицательное значение под корнем");
    }
    const result = (b * b - Math.PI) / (a - 4) + 7 * Math.sqrt(c + Math.PI);
    return result;
  }  