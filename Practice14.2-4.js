

//Odd Number

function hasOddNumber(arr){
  return arr.some(function(value){
    return value % 2 !== 0;
  })
}


//A Zero

function hasAZero(num){
  return num.toString().split('').some(function(value){
    return value === '0';
  })
}


// Only OddNumbers

function hasOnlyOddNumbers(arr){
  return arr.every(function(value){
    return value % 2 !== 0;
  })
}

//No Duplicates

function hasNoDuplicates(arr){
  return arr.every(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  });
}

//Certain Key

function hasCertainKey(arr, key){
  return arr.every(function(value){
    return key in value
  })
}


//Certain Value

function hasCertainValue(arr, key, searchValue){
  return arr.every(function(value){
    return value[key] === searchValue;
  })
}