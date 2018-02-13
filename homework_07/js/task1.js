let i = 0, j = 0, k = 0;
let n = +prompt('How many column?', 5);

if (n >= 1 && n <= 20 ) {
   for (i = 0; i < n; i++) {
      var str = '';
      for ( j = 1; j < n-i; j++) {
         str = str + '   ';
      }
      for ( k = 1; k <= (2*i+1); k++) {
         str = str + '[~]';
      }
      console.log(str);
   }
} else {
   console.log('Error. Please add only 1-20 figures');
}
