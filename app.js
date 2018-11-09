const binarySearch = (list, searchValue) => {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (list[middle] === searchValue) {
      return true;
    } else if (list[middle] < searchValue) {
      low = middle + 1;
    } else if (list[middle] > searchValue) {
      high = middle - 1;
    }
  }

  return false;
};

const nameList = [
  'Aaron',
  'Andy',
  'Batman',
  'Betsy',
  'Boba',
  'Bonnie',
  'Clarence',
  'Daisy',
  'Elektra',
  'Flash',
];

console.log(binarySearch(nameList, 'Daisy'));
console.log(binarySearch(nameList, 'Bruce'));
