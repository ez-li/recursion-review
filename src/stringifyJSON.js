// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // takes in data and returns the data in string form
  // data types:
  // number, string, boolean, null
  // function, undefined -> return undefined
  // array, object
  var result = '';
  var type = typeof obj;

  if (type === 'number') {
    result += obj;
  }
  if (type === 'string') {
    result += '"' + obj + '"';
  }
  if (type === 'boolean') {
    result += obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (type === 'function' || obj === undefined) {
    return;
  }

  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      if (i + 1 === obj.length) {
        result += stringifyJSON(obj[i]);
      } else {
        result += stringifyJSON(obj[i]) + ',';
      }
    }
    result += ']';
  }
  else if (type === 'object') {
    result += '{';
    var count = 0;
    for (var key in obj) {
      if (obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      if (count + 1 === Object.keys(obj).length) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      } else {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      count++;
    }
    result += '}';
  }

  return result;
};
