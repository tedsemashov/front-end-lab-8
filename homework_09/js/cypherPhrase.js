cypherPhrase = (obj, str) => {
   var arr = getTransformedArray(str, (el) => {
      return obj[el] || el;
});
   return arr.join('');
}