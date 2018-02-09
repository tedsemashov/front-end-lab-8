var euroInput = prompt('Please input euro:', 10);
var dollarInput = prompt('Please input dollars:', 10);
const euroToUAH = 33.4602;
const dollarToUAH = 27.1196;

if (euroInput.match(/^\d+$/) && dollarInput.match(/^\d+$/)) {
   let a = euroInput * euroToUAH;
   let b = dollarInput * dollarToUAH;
   let c = euroToUAH/dollarToUAH;
   console.log(euroInput + ' euros are equal ' + parseFloat(a.toFixed(2)) + ' UAH, ' + dollarInput + ' dollars are equal ' + parseFloat(b.toFixed(2)) +' UAH, '+ ' one euro' + ' is equal ' + parseFloat(c.toFixed(2)) + ' dollars ');
}

else {
   alert('Please add only figures!');
}