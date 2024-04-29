

//For Each 
//Double Values

function doubleValues(arr) {
  let doubledArray = [];

  for (let i = 0; i < arr.length; i++) {  
      doubledArray.push(arr[i] * 2);
  }
  return doubledArray;
}

//Only Even Values 

function onlyEvenValues(arr) {
  let evenArray = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
      }
  }
  return evenArray;
}


// Add Key and Value 

function addKeyAndValue(arr, key, value) {

  for (let i = 0; i < arr.length; i++) {
      arr[i][key] = value;
  }
  return arr;
}

// Vowel Count 

function vowelCount(str) {
  let vowelCounts = {};
  let  lowercaseStr = str.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < lowercaseStr.length; i++) {
      let char = lowercaseStr[i];if (vowels.indexOf(char) !== -1) {
          if (vowelCounts[char]) {
              vowelCounts[char]++;
          } else {
              vowelCounts[char] = 1;
          }
      }
  }
  return vowelCounts;
}


// Map 
//Double Values with Map

function doubleValuesWithMap(arr) {
   return arr.map(function(value) {
      return value * 2;
  });
}

// Val TimesIndex

function valTimesIndex(arr) {
  return arr.map(function(value, index) {
      return value * index;
  });
}

//Extract Key

function extractKey(arrOfObjects, key) {
  return arrOfObjects.map(function(obj) {
      return obj[key];
  });
}

//Extract Full NAme 

function extractFullName(arrOfObjects) {
  return arrOfObjects.map(function(obj) {
      return obj.first + ' ' + obj.last;
  });
}

// FILTER

//Filter by Value

function filterByValue(arr, key) {
  return arr.filter(function(value) {
    return value[key] !== undefined;
  });
}


//Find

function find(arr, searchValue) {
  return arr.filter(function(element) {
    return element === searchValue;
  })[0];
}

function findInObj(arrOfObjects, key, value) {
  return arrOfObjects.filter(function(obj) {
    return obj[key] === value;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(value) {
      return vowels.indexOf(value) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function(number) {
      return number % 2 !== 0;
    })
    .map(function(number) {
      return number * 2;
    });
  }