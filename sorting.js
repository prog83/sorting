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
    let _array = array.slice();
    for (let i = 0; i < _array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < _array.length; j++) {
        if (_array[j] < _array[minIndex]) {
          minIndex = j;
        }
      }
      if (i !== minIndex) {
        const tmp = _array[i];
        _array[i] = _array[minIndex];
        _array[minIndex] = tmp;
      }
    }
    console.log('Selection        = ', _array);
  }

  static InsertionSort(array) {
    let _array = array.slice();
    for (let i = 1; i < _array.length; i++) {
      const currentElement = _array[i];
      let previusIndex = i - 1;
      while (previusIndex >= 0 && _array[previusIndex] > currentElement) {
        _array[previusIndex + 1] = _array[previusIndex];
        _array[previusIndex] = currentElement;
        --previusIndex;
      }
    }
    console.log('Insertion        = ', _array);
  }

  static BubbleSort(array) {
    let _array = array.slice();
    let swapped = true;
    for (let i = 0; i < _array.length; i++) {
      if (swapped) {
        swapped = false;
        for (let j = 1; j < _array.length - i; j++) {
          if (_array[j-1] > _array[j]) {
            swapped = true;
            const tmp = _array[j-1];
            _array[j-1] = _array[j];
            _array[j] = tmp;
          }
        }
        if (!swapped) {
          console.log('Bubble           = ', _array);
          break;
        }
      }
    }

  }

  static MergeSort(array) {
    let _array = array.slice();

    let segmentationArr = (arr) => {
      if (arr.length === 1) {return arr;}
      const midPoint = arr.length / 2;
      const leftArr = arr.slice(0, midPoint);
      const rightArr = arr.slice(arr.length - midPoint);
      let l = segmentationArr(leftArr);
      let r = segmentationArr(rightArr);
      return Merge(l, r);
    }

    let Merge = (lArr, rArr)=> {
      let l = 0, r = 0, result = [];
      while (l < lArr.length && r < rArr.length) {
        result.push(lArr[l] < rArr[r] ? lArr[l++] : rArr[r++]);
      }
      return result.concat(l < lArr.length ? lArr.slice(l) : rArr.slice(r));
    }

    console.log('Merge            = ', segmentationArr(_array));

  }

}

var array = [1, -2, 10, 7, 8];

console.log('Not sorted array = ', array);
Sorting.SelectionSort(array);
Sorting.InsertionSort(array);
Sorting.BubbleSort(array);
Sorting.MergeSort(array);

findNumber(3, 1000);
