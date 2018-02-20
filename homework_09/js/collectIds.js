collectIds = (array) => {
   var rate = getFilteredArray(array, (el) => {
      return el.rating > 3;
});
   return getTransformedArray(rate, (el) => {
      return el.id;
});
}