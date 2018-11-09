const jsonfile = require('jsonfile');
const file = 'phonebook.json';

// Search a list of string

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

// Search with a list of objects

const binarySearchById = (list, searchId) => {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (list[middle].id === searchId) {
      return list[middle];
    } else if (list[middle].id < searchId) {
      low = middle + 1;
    } else if (list[middle].id > searchId) {
      high = middle - 1;
    }
  }

  return false;
};

jsonfile.readFile(file, (err, obj) => {
  if (err) {
    return console.log(err);
  }

  console.log(binarySearchById(obj, 44));
});

// Search a list of objects by any attribute

const sortByAttribute = (list, attribute) => {
  return list.sort((a, b) => {
    if (a[attribute] < b[attribute]) {
      return -1;
    }

    if (a[attribute] > b[attribute]) {
      return 1;
    }

    return 0;
  });
};

const binarySearchByAttribute = (list, attribute, value) => {
  list = sortByAttribute(list, attribute);

  let low = 0;
  let high = list.length;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (list[middle][attribute] === value) {
      return list[middle];
    } else if (list[middle][attribute] < value) {
      low = middle + 1;
    } else if (list[middle][attribute] > value) {
      high = middle - 1;
    }
  }

  return false;
};

jsonfile.readFile(file, (err, obj) => {
  if (err) {
    return console.log(err);
  }

  console.log(binarySearchByAttribute(obj, 'name', 'Micheal'));
});
