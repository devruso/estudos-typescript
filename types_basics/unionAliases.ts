// These new types are called union types. You can combine them with the pipe operator (|).
// Usually started with an uppercase letter, but it's not mandatory.
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
//These types are very used in React, because you can use them to define the type of props.

function combine(n1: Combinable, n2: Combinable, resultConversion: ConversionDescriptor ) {
    let result;
     if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
      result = +n1 + +n2;
    }else {
      result = n1.toString() + n2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(22, 15, 'as-number');
  console.log(combinedAges);
  
  const combinedNames = combine('Jamil', 'son', 'as-text');
  console.log(combinedNames);