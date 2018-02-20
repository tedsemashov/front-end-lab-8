increment = (num) => {
   return num + 1;
};

getTransformedArray = (array, fn) => {
   var result = [];
   forEach(array, (num) => {
      result.push(fn(num))
});
   return result;
}