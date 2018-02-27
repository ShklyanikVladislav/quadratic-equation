module.exports = function solveEquation(equation) {
  var arr=equation.split('');
  var ind1 , ind2;
  var n1 , n2 , n3 ;
  var des;
  var x1 , x2;
  for(var i=0 ; i<arr.length ; i++){
  if (arr[i]=="x") {
  ind1=i;
  n1=+equation.substring(0,ind1-2);
  break;
  }
  }
  for(var j=(ind1+1) ; j < arr.length ; j++ ){
  if (arr[j] == 'x'){
  ind2=j;
  n2=equation.substring(ind1+4 , ind2-3);
  n2=+n2.replace(/\s/g, '');
  n3=equation.substring(ind2+2);
  n3=+n3.replace(/\s/g, '');
  break;
  }
  }
  des=( n2 * n2 ) - 4 * n1 * n3;
  var dSqrt=Math.round(Math.sqrt(des));
  x1=(-n2+dSqrt)/(2*n1);
  x2=(-n2-dSqrt)/(2*n1);
  function compareNumeric(x1, x2) {
    if (x1 > x2) return 1;
    if (x1 < x2) return -1;
  }
  
  var result=[x2 , x1];
  result.sort(compareNumeric);
  return result;
  }

