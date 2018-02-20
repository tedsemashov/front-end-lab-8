getFilteredArray = (array, fn) => {
   var res = [];
   forEach(array, el => {
      if (getFilteredfunc(el)) {
      res.push(el);
   }
});
   return res;
}