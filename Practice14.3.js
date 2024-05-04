//  Extract Value 

function extractValue(arr, key) {
  return arr.reduce((result, obj) => {
      result.push(obj[key]);
      return result;
  }, []);
}

// Vowel Count 

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((count, char) => {
      const lowercaseChar = char.toLowerCase();
      if (vowels.includes(lowercaseChar)) {
          count[lowercaseChar] = (count[lowercaseChar] || 0) + 1;
      }
      return count;
  }, {});
}

//Add key and Value 

function addKeyAndValue(arr, key, value) {
  return arr.reduce((result, obj) => { 
      obj[key] = value;
      result.push(obj);
      return result;
  }, []);
}


//Partition

function partition(arr, callback) {
  return arr.reduce((result, val) => {
      const index = callback(val) ? 0 : 1;
      result[index].push(val);
      return result;
  }, [[], []]); 
}