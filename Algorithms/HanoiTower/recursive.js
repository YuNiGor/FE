function hanoiTowerRecursive(n, source, auxiliary, destination) {
  if (n === 1) {
    // Базовый случай: перемещаем верхний диск с исходного стержня на целевой стержень
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  // Рекурсивно перемещаем n-1 диск с исходного стержня на вспомогательный стержень
  hanoiTowerRecursive(n - 1, source, destination, auxiliary);

  // Перемещаем оставшийся диск с исходного стержня на целевой стержень
  console.log(`Move disk ${n} from ${source} to ${destination}`);

  // Рекурсивно перемещаем n-1 диск с вспомогательного стержня на целевой стержень
  hanoiTowerRecursive(n - 1, auxiliary, source, destination);
}

// Пример использования рекурсивного решения
const n = 3;
const source = 'A';
const auxiliary = 'B';
const destination = 'C';

hanoiTowerRecursive(n, source, auxiliary, destination);
