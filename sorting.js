function findNumber(num, range) {
  let count = 0;
  for (let i = 0; i <= range; i++) {
    const str = i.toString();
    for (let j = 0; j <= str.length; j++) {
      if (str[j] === num.toString()) {
        count++;
        break;
      }
    }
  }
  console.log('Count = ', count);
}

class Sorting {

  static SelectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
        if (i !== minIndex) {
          const tmp = array[i];
          array[i] = array[minIndex];
          array[minIndex] = tmp;
        }
      }
    }
    console.log('Selection', array);
  }

  static InsertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      const currentElement = array[i];
      let previusIndex = i - 1;
      while (previusIndex >= 0 && array[previusIndex] > currentElement) {
        array[previusIndex + 1] = array[previusIndex];
        array[previusIndex] = currentElement;
        --previusIndex;
      }
    }
    console.log('Insertion', array);
  }
}

const array = [1, 2, 7, 4, 5, -6];

Sorting.SelectionSort(array);
Sorting.InsertionSort(array);

findNumber(3, 1000);
