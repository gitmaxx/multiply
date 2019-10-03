module.exports = function multiply(first, second) {
  
  let firstNumber = (first.length >= second.length) ? first: second;
  let secondNumber = (first.length < second.length) ? first: second;
  let firstLength = firstNumber.length;
  let secondLength = secondNumber.length;
  let result = '';
  let resultTemp = '';
  let resultSum = '';
  let singleMultiply;
  let tempDigit = 0;
  let td= 0;
  for (let i=1; i<=secondLength; i++) {
    secondDigit = secondNumber[secondLength-i];
    for (let j=1; j<=firstLength; j++) {
      firstDigit = firstNumber [firstLength-j];   
      singleMultiply = firstDigit * secondDigit;
      resultTemp = String((tempDigit + singleMultiply) % 10) + resultTemp;   
      tempDigit = Math.floor((tempDigit + singleMultiply)/10);
    }
     if (tempDigit>0) {resultTemp= String(tempDigit)+resultTemp; tempDigit=0;}
     if (i>1) {
      resultSum = result.slice(result.length-i+1);
     
        for (let k=1; k<=resultTemp.length; k++) {
          resultSum = String((((result.length-i>k-2) ? Number(result[result.length-i+1-k]) : 0 ) + Number(resultTemp[resultTemp.length-k])+td) % 10) + resultSum;
          td = Math.floor((((result.length-i>k-2) ? Number(result[result.length-i+1-k]) : 0 ) + Number(resultTemp[resultTemp.length-k])+td)/10);
        }
        if (td>0) {resultSum= '1'+resultSum; td=0;}
        result=resultSum;
        resultTemp='';
        resultSum='';
      } else {
        result=resultTemp;
        resultTemp='';
      }
  }
  return result;
}

