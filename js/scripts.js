function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = str.split('');
  if (vowels.includes(str.charAt(0))) {
    return str += 'way';
  } else {
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}
console.log(translatePigLatin("dog"));
