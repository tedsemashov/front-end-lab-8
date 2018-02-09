var firstSide = +prompt('Input first side of triangle:');
var secondSide = +prompt('Input second side of triangle:');
var thirdSide = +prompt('Input third side of triangle:');
var p = (firstSide + secondSide + thirdSide)/2; //Півпериметр
var s = Math.sqrt(p*(p-firstSide)*(p-secondSide)*(p-thirdSide)); // Площа
var triangleType = '';


if (firstSide > 0 && secondSide > 0 && thirdSide > 0) {

   if (firstSide == secondSide && firstSide == thirdSide && secondSide == thirdSide) {
      triangleType = 'equilateral'
   }

   else if (firstSide == secondSide || firstSide == thirdSide || secondSide == thirdSide ) {
      triangleType = 'isosceles'
   }

   else if (Math.pow(firstSide, 2) == Math.pow(secondSide, 2) + Math.pow(thirdSide, 2) || Math.pow(secondSide, 2) == Math.pow(firstSide, 2) + Math.pow(thirdSide, 2) || Math.pow(thirdSide, 2) == Math.pow(firstSide, 2) + Math.pow(secondSide, 2)) {
      triangleType = 'right'
   }

   else {
      triangleType = 'scalene'
   }

   console.log('Type of triangle is ' + triangleType + ' triangle and square is ' + parseFloat(s.toFixed(2)));
}

else {
   console.log('Incorect data');
}
