function hanoiTowerIterative(n, source, auxiliary, destination) {
  // Создаем стек для хранения состояний перемещения дисков
  const stack = [];

  // Создаем объект для представления состояния перемещения дисков
  const state = {
    n: n,
    source: source,
    auxiliary: auxiliary,
    destination: destination
  };

  // Добавляем начальное состояние в стек
  stack.push(state);

  while (stack.length > 0) {
    // Извлекаем текущее состояние из стека
    const currentState = stack.pop();

    if (currentState.n === 1) {
      // Базовый случай: перемещаем верхний диск с исходного стержня на целевой стержень
      console.log(`Move disk 1 from ${currentState.source} to ${currentState.destination}`);
    } else {
      // Создаем два новых состояния для перемещения n-1 диска с исходного на вспомогательный стержень
      // и перемещения оставшихся дисков с исходного на целевой стержень
      const newState1 = {
        n: currentState.n - 1,
        source: currentState.source,
        auxiliary: currentState.destination,
        destination: currentState.auxiliary
      };

      const newState2 = {
        n: 1,
        source: currentState.source,
        auxiliary: currentState.auxiliary,
        destination: currentState.destination
      };

      // Создаем новое состояние для перемещения n-1 диска с вспомогательного на целевой стержень
      const newState3 = {
        n: currentState.n - 1,
        source: currentState.auxiliary,
        auxiliary: currentState.source,
        destination: currentState.destination
      };

      // Добавляем новые состояния в стек в обратном порядке (чтобы сохранить порядок перемещений)
      stack.push(newState3);
      stack.push(newState2);
      stack.push(newState1);
    }
  }
}

// Пример использования итеративного решения
const n = 3;
const source = 'A';
const auxiliary = 'B';
const destination = 'C';

hanoiTowerIterative(n, source, auxiliary, destination);
